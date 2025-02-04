import Link from "next/link";
import styles from "./_ui/not-found.module.css";

function NotFound() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>This page could not be found :(</h1>
      <Link href="/dashboard" className={styles.link}>
        ⏪Go back dashboard
      </Link>
    </main>
  );
}

export default NotFound;
