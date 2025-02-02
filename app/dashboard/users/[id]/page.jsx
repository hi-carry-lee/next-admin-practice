import styles from "../../../ui/dashboard/user/id/userDetail.module.css";
import Image from "next/image";
import { fetchUserById, updateUser } from "../../../lib/actions";

async function UserDetail({ params }) {
  const { id } = params;
  const user = await fetchUserById(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={user.image || "/noavatar.png"}
            alt="user avatar"
            fill
            className={styles.coverImage}
          />
        </div>
        <span>{user.username}</span>
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={id} />
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder={user.username}
            name="username"
            id="username"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder={user.email}
            name="email"
            id="email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder={"············"}
            name="password"
            id="password"
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="phone"
            placeholder={user.phone}
            name="phone"
            id="phone"
          />
          <label htmlFor="address">Address</label>
          <textarea
            type="textares"
            name="address"
            id="address"
            placeholder={user.address}
          />
          <label htmlFor="isAdmin">Is Admin?</label>
          {/* <select name="isAdmin" id="isAdmin" defaultValue={user.isAdmin}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label htmlFor="isActive">Is Active?</label>
          <select name="isActive" id="isActive" defaultValue={user.isActive}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select> */}
          <select name="isAdmin" id="isAdmin" defaultValue="">
            <option value="" disabled>
              {user.isAdmin ? "Yes" : "No"}
            </option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label htmlFor="isActive">Is Active?</label>
          <select name="isActive" id="isActive" defaultValue="">
            <option value="" disabled>
              {user.isActive ? "Yes" : "No"}
            </option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}

export default UserDetail;
