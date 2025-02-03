import Sidebar from "../_ui/dashboard/sidebar/sidebar";
import Navbar from "../_ui/dashboard/navbar/navbar";
import Footer from "../_ui/dashboard/footer/footer";
import styles from "../_ui/dashboard/dashboard.module.css";

export const metadata = {
  title: "dashboard",
};

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
