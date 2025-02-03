import styles from "./user.module.css";
import Search from "../search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../pagination/pagination";
import { deleteUser } from "../../../_lib/actions";

function UserList({ users, count }) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search a new user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.image || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "active" : "passive"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={user.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
}

export default UserList;
// const users = [
//   {
//     id: 1,
//     username: "John Doe",
//     email: "john@example.com",
//     img: "/noavatar.png",
//     createdAt: new Date("2024-12-15"),
//     isAdmin: true,
//     isActive: true,
//   },
//   {
//     id: 2,
//     username: "Sarah Smith",
//     email: "sarah.smith@example.com",
//     img: "/noavatar.png",
//     createdAt: new Date("2024-12-20"),
//     isAdmin: false,
//     isActive: true,
//   },
//   {
//     id: 3,
//     username: "Mike Johnson",
//     email: "mike.j@example.com",
//     img: "/noavatar.png",
//     createdAt: new Date("2025-01-05"),
//     isAdmin: false,
//     isActive: false,
//   },
// ];
