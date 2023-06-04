import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductItem = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);
  const findProduct = cart.find((item) => item.id === product.id);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="border p-4 m-2 rounded-lg shadow-lg">
      <img
        src={product.image}
        alt="product image"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-500 my-2">${product.price}</p>
        <button
          className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full h-[50px] ${
            findProduct && "opacity-50 cursor-no-drop"
          }`}
          onClick={() => addToCart(product)}
          disabled={findProduct}
        >
          Add cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
