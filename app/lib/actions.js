"use server";
import { revalidatePath } from "next/cache";
import { User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const addUser = async (formData) => {
  const { username, email, password, phone, address } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const salt = await bcrypt.genSalt(10);
    // 👉👉👉Important: Be careful with the parameter order
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
    });
    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("failed to create new user!");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
