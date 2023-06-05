import ProductItem from "./ProductItem";
import productData from "../productData";

const Products = (props) => {
  return (
    <div className="grid gap-10 mb-8 md:grid-cols-3">
      {productData.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
