import { fetchProductById, updateProduct } from "../../../lib/actions";
import styles from "../../../ui/dashboard/products/id/productDetail.module.css";
import Image from "next/image";

export const metadata = {
  title: "product detail",
};

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
        <form className={styles.form} action={updateProduct}>
          <input type="hidden" name="id" value={product.id} />
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder={product.title}
          />
          <label htmlFor="category">Category</label>
          <select name="cat" id="cat" defaultValue="">
            <option value="" style={{ textTransform: "capitalize" }} disabled>
              {product.cat.charAt(0).toUpperCase() + product.cat.slice(1)}
            </option>
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            id="price"
            placeholder={product.price}
          />
          <label htmlFor="stock">Stock</label>
          <input
            type="text"
            name="stock"
            id="stock"
            placeholder={product.stock}
          />
          <label htmlFor="color">Color</label>
          <input
            type="text"
            name="color"
            id="color"
            placeholder={product.color}
          />
          <label htmlFor="size">Size</label>
          <input type="text" name="size" id="size" placeholder={product.size} />
          <label htmlFor="desc">Description</label>
          <textarea name="desc" id="desc" placeholder={product.desc} />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}

export default ProductDetail;
