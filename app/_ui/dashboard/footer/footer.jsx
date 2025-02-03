import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Kerry Lee</div>
      <div className={styles.text}>&copy;All rights reserved</div>
    </div>
  );
}

export default Footer;
