import { MdShoppingCartCheckout } from "react-icons/md";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartIcon = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="relative">
      <MdShoppingCartCheckout
        className="text-2xl"
        onClick={() => setMyState("Ramazan")}
      />
      {cart.length > 0 && (
        <span className="bg-red-500 text-white flex w-5 h-5 justify-center items-center rounded-full absolute -top-2 -right-3 text-xs">
          {cart.length}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
