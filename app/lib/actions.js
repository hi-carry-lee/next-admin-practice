"use server";
import { revalidatePath } from "next/cache";
import { User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";

export const addUser = async (formData) => {
  const { username, email, password, phone, address } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const newUser = new User({ username, email, password, phone, address });
    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("failed to create new user!");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
