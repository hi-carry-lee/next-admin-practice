import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (search) => {
  try {
    connectToDB();
    // create a regex to ignore case, and the regex can also be used as the search parameter of mongoose
    const regex = new RegExp(search, "i");
    const param = search ? { username: regex } : {};
    const users = await User.find(param);
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
