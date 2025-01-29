import styles from "../../../ui/dashboard/user/id/userDetail.module.css";
import Image from "next/image";

function UserDetail() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/noavatar.png" alt="user avatar" fill />
        </div>
        <span>Kerry Lee</span>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="hello"
            name="username"
            id="username"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="hello@gmail.com"
            name="email"
            id="email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="dasdasd"
            name="password"
            id="password"
          />
          <label htmlFor="phone">Phone</label>
          <input type="phone" placeholder="123" name="phone" id="phone" />
          <label htmlFor="address">Address</label>
          <textarea type="textares" name="address" id="address" />
          <label htmlFor="isAdmin">Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected>
              Yes
            </option>
            <option value={false}>No</option>
          </select>
          <label htmlFor="isActive">Is Active?</label>
          <select name="isActive" id="isActive">
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
