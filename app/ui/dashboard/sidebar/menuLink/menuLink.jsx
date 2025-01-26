"use client";
import Link from "next/link";
import styles from "./menuLink.module.css";
import { usePathname } from "next/navigation";

function MenuLink({ item }) {
  // a Client Component hook that lets you read the current URL's pathname
  const path = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        path === item.path ? styles.active : ""
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
}

export default MenuLink;
