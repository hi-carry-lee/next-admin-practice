import styles from "./user.module.css";
import Search from "../search/search";
import Link from "next/link";

function User() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search a new user..." />
        <Link href="/dashboard/user/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      {/* <table className={styles.table}></table> */}
    </div>
  );
}

export default User;
