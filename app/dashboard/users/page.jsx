import UserList from "../../ui/dashboard/user/user";
import { fetchUsers } from "../../lib/data.js";

export const metadata = {
  title: "users",
};

// searchParams is used to get the search query from the URL
// it can only used in the page component
async function UsersPage({ searchParams }) {
  const search = searchParams?.search || "";
  const page = searchParams?.page || 1;
  const { users, count } = await fetchUsers(search, page);

  return (
    <div>
      <UserList users={users} count={count} />
    </div>
  );
}

export default UsersPage;
