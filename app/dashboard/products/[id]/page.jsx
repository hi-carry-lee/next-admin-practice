import { fetchProductById } from "../../../lib/actions";
import styles from "../../../ui/dashboard/products/id/productDetail.module.css";
import Image from "next/image";

async function ProductDetail({ params }) {
  const { id } = params;
  const product = await fetchProductById(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={product.img || "/noproduct.jpg"}
            alt="uproduct image"
            fill
            className={styles.productImage}
          />
        </div>
        <span>{product.title}</span>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="title"
            name="title"
            id="title"
            value={product.title}
          />
          <label htmlFor="category">Category</label>
          <select name="cat" id="cat" value={product.cat}>
            <option value="general">Choose a Category</option>
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            placeholder="price"
            name="price"
            id="price"
            value={product.price}
          />
          <label htmlFor="stock">Stock</label>
          <input
            type="text"
            placeholder="stock"
            name="stock"
            id="stock"
            value={product.stock}
          />
          <label htmlFor="color">Color</label>
          <input type="text" name="color" id="color" value={product.color} />
          <label htmlFor="size">Size</label>
          <input type="text" name="size" id="size" value={product.size} />
          <label htmlFor="desc">Description</label>
          <textarea name="desc" id="desc" value={product.desc} />
        </form>
      </div>
    </div>
  );
}

export default ProductDetail;
