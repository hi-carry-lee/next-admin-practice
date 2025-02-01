import styles from "./products.module.css";
import Search from "../search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../pagination/pagination";

function Products({ products, count }) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search a new product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src={product.img || "/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>${product.price}</td>
              <td>{product.createdAt?.toString().slice(4, 16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form>
                    <input type="hidden" name="id" value={product.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
}

export default Products;

// const products = [
//   {
//     id: 1,
// img: "/noproduct.jpg",
// title: "Wireless Headphones",
// desc: "High-quality wireless headphones with noise cancellation.",
// price: 99.99,
// createdAt: new Date("2024-11-15"),
// stock: 50,
//   },
//   {
//     id: 2,
//     img: "/noproduct.jpg",
//     title: "Smartwatch Pro",
//     desc: "Advanced smartwatch with fitness tracking and notifications.",
//     price: 149.99,
//     createdAt: new Date("2024-12-05"),
//     stock: 30,
//   },
//   {
//     id: 3,
//     img: "/noproduct.jpg",
//     title: "Gaming Mouse",
//     desc: "Ergonomic gaming mouse with customizable DPI settings.",
//     price: 59.99,
//     createdAt: new Date("2025-01-10"),
//     stock: 75,
//   },
// ];
