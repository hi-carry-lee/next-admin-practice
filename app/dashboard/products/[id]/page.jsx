import styles from "../../../ui/dashboard/products/id/productDetail.module.css";
import Image from "next/image";

function UserDetail() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/noproduct.jpg" alt="uproduct image" fill />
        </div>
        <span>Product Title</span>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label htmlFor="title">Title</label>
          <input type="text" placeholder="title" name="title" id="title" />
          <label htmlFor="category">Category</label>
          <select name="cat" id="cat">
            <option value="general">Choose a Category</option>
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select>
          <label htmlFor="price">Price</label>
          <input type="text" placeholder="price" name="price" id="price" />
          <label htmlFor="stock">Stock</label>
          <input type="text" placeholder="stock" name="stock" id="stock" />
          <label htmlFor="color">Color</label>
          <input type="text" name="color" id="color" />
          <label htmlFor="size">Size</label>
          <input type="text" name="size" id="size" />
          <label htmlFor="desc">Description</label>
          <textarea name="desc" id="desc" />
        </form>
      </div>
    </div>
  );
}

export default UserDetail;
