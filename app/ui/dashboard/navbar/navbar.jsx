"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import { MdNotifications, MdOutlineChat, MdPublic } from "react-icons/md";
import Search from "../search/search";

function Navbar() {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <Search placeholder="Search..." />
        <div className={styles.icons}>
          <MdNotifications size={20} />
          <MdOutlineChat size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
