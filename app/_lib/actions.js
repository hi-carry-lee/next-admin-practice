"use server";
import { revalidatePath } from "next/cache";
import { User, Product } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

// -------------------- USER --------------------
export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
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
      isAdmin,
      isActive,
    });
    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("failed to create new user!");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const fetchUserById = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch user!");
  }
};

export const updateUser = async (formData) => {
  // default value also coule be used as the value
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const updatedFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updatedFields).forEach(
      (key) =>
        (updatedFields[key] === "" || updatedFields[key] === undefined) &&
        delete updatedFields[key]
    );
    if (
      updatedFields["password"] !== "" &&
      updatedFields["password"] !== undefined
    ) {
      const salt = await bcrypt.genSalt(10);
      // 👉👉👉Important: Be careful with the parameter order
      const hashedPassword = await bcrypt.hash(password, salt);
      updatedFields["password"] = hashedPassword;
    }
    if (Object.keys(updatedFields).length > 0) {
      await User.findByIdAndUpdate(id, updatedFields);
      revalidatePath("/dashboard/users");
      console.log("execute update user....");
    }
    console.log("execute update user action....");
    console.log("------------------------------");
  } catch (error) {
    console.log(error);
    throw new Error("failed to update user!");
  }
  redirect("/dashboard/users");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("failed to delete user!");
  }
  revalidatePath("/dashboard/users");
};

// ---------------- PRODUCT --------------------
export const addProduct = async (formData) => {
  const { title, cat, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newProduct = new Product({
      title,
      cat,
      desc,
      price,
      stock,
      color,
      size,
    });
    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("failed to create new product!");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const fetchProductById = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch product!");
  }
};

export const updateProduct = async (formData) => {
  // default value also coule be used as the value
  const { id, title, cat, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const updatedFields = {
      title,
      cat,
      desc,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updatedFields).forEach(
      (key) =>
        (updatedFields[key] === "" || updatedFields[key] === undefined) &&
        delete updatedFields[key]
    );
    if (Object.keys(updatedFields).length > 0) {
      await Product.findByIdAndUpdate(id, updatedFields);
      revalidatePath("/dashboard/products");
      console.log("execute update product....");
    }
    console.log("execute update product action....");
    console.log("------------------------------");
  } catch (error) {
    console.log(error);
    throw new Error("failed to update product!");
  }
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("failed to delete product!");
  }
  revalidatePath("/dashboard/products");
};
