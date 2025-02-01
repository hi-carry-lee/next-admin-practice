import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { PAGE_COUNT } from "../lib/constants";

export const fetchUsers = async (search, page) => {
  // create a regex to ignore case, and the regex can also be used as the search parameter of mongoose
  const regex = new RegExp(search, "i");
  try {
    connectToDB();
    // in the new version of mongoose, count() is not available
    const count = await User.countDocuments({ username: { $regex: regex } });
    const users = await User.find({ username: { $regex: regex } })
      .limit(PAGE_COUNT)
      .skip(PAGE_COUNT * (page - 1));
    return { users, count };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const createUser = async (user) => {
  try {
    connectToDB();
    await User.insert({ user });
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchProducts = async (search, page) => {
  // create a regex to ignore case, and the regex can also be used as the search parameter of mongoose
  const regex = new RegExp(search, "i");
  try {
    connectToDB();
    // in the new version of mongoose, count() is not available
    const count = await Product.countDocuments({ title: { $regex: regex } });
    const products = await Product.find({ title: { $regex: regex } })
      .limit(PAGE_COUNT)
      .skip(PAGE_COUNT * (page - 1));
    return { products, count };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};
