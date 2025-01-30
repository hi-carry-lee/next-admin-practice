import User from "../../ui/dashboard/user/user";
import { fetchUsers } from "../../lib/data.js";

async function UsersPage() {
  const users = await fetchUsers();
  console.log(users);
  return (
    <div>
      <User users={users} />
    </div>
  );
}

export default UsersPage;
