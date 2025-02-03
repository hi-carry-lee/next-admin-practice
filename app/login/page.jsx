import React from "react";
import styles from "../_ui/login/login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      {/* <h1>Login</h1> */}
      <form className={styles.form}>
        <h1>Login</h1>
        <input type="text" name="username" id="username" />
        <input type="password" name="password" id="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
