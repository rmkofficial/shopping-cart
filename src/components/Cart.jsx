const Cart = ({ cart }) => {
  if (cart.length === 0) return null;
  return (
    <div className="border ml-auto w-72 p-4 mt-2 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Cart</h2>
      <ul>
        {cart.map((item) => (
          <li className="mt-2 flex justify-between" key={item.id}>
            <span>{item.name}</span>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
      <hr className="my-4" />
      <p className="font-semibold text-xl">Total: 100$</p>
      <button className="bg-red-500 text-white px-4 py-2 rounded w-full hover:bg-red-700 transition-all mt-4">
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
