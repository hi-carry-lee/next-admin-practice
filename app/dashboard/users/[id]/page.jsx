import styles from "../../../ui/dashboard/user/id/userDetail.module.css";
import Image from "next/image";
import { fetchUserById } from "../../../lib/actions";

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
        <form className={styles.form}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="hello"
            name="username"
            id="username"
            value={user.username}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="hello@gmail.com"
            name="email"
            id="email"
            value={user.email}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="dasdasd"
            name="password"
            id="password"
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="phone"
            placeholder="123"
            name="phone"
            id="phone"
            value={user.phone}
          />
          <label htmlFor="address">Address</label>
          <textarea
            type="textares"
            name="address"
            id="address"
            value={user.address}
          />
          <label htmlFor="isAdmin">Is Admin?</label>
          <select name="isAdmin" id="isAdmin" value={user.isAdmin}>
            <option value={true} selected>
              Yes
            </option>
            <option value={false}>No</option>
          </select>
          <label htmlFor="isActive">Is Active?</label>
          <select name="isActive" id="isActive" value={user.isActive}>
            <option value={true}>Yes</option>
            <option value={false} selected>
              No
            </option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}

export default UserDetail;
