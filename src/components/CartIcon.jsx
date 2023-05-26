import { MdShoppingCartCheckout } from "react-icons/md";

const CartIcon = () => {
  return (
    <div className="relative">
      <MdShoppingCartCheckout className="text-2xl" />
      <span className="bg-red-500 text-white flex w-5 h-5 justify-center items-center rounded-full absolute -top-2 -right-3 text-xs">
        0
      </span>
    </div>
  );
};

export default CartIcon;
