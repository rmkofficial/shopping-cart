import { MdShoppingCartCheckout } from "react-icons/md";
import { MyContext } from "../main";
import { useContext } from "react";

const CartIcon = ({ cart }) => {
  const { myState, setMyState } = useContext(MyContext);

  return (
    <div className="relative">
      <MdShoppingCartCheckout
        className="text-2xl"
        onClick={() => setMyState("Ramazan")}
      />
      {myState}
      {cart.length > 0 && (
        <span className="bg-red-500 text-white flex w-5 h-5 justify-center items-center rounded-full absolute -top-2 -right-3 text-xs">
          {cart.length}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
