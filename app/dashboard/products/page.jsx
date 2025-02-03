import ProductsList from "../../ui/dashboard/products/products.jsx";
import { fetchProducts } from "../../lib/data.js";

export const metadata = {
  title: "products",
};

async function ProductsPage({ searchParams }) {
  const search = searchParams?.search || "";
  const page = searchParams?.page || 1;
  const { products, count } = await fetchProducts(search, page);

  return (
    <div>
      <ProductsList products={products} count={count} />
    </div>
  );
}

export default ProductsPage;
