import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, emptyCart, removeItem } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  if (cart.length === 0) return null;
  return (
    <div className="border ml-auto w-72 p-4 mt-2 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Cart</h2>
      <ul>
        {cart.map((item) => (
          <li className="mt-2 flex justify-between" key={item.id}>
            <span
              onClick={() => removeItem(item.id)}
              className="cursor-pointer"
            >
              {item.name}
            </span>
            <span
              onClick={() => removeItem(item.id)}
              className="cursor-pointer"
            >
              ${item.price}
            </span>
            <button
              className="text-red-500"
              onClick={() => removeItem(item.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <hr className="my-4" />
      <p className="font-semibold text-xl">Total: ${total}</p>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded w-full hover:bg-red-700 transition-all mt-4"
        onClick={emptyCart}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
