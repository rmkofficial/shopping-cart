import { useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  const [cart, setCart] = useState([]);
  const removeItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };
  const emptyCart = () => {
    setCart([]);
  };

  return (
    <div className="container mx-auto p-4">
      <Header cart={cart} setCart={setCart} />
      <Products cart={cart} setCart={setCart} />
      <Cart cart={cart} emptyCart={emptyCart} removeItem={removeItem} />
    </div>
  );
}

export default App;
