/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../Components/CartItem/CartItem";


const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Product Name</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Quantity</th>
            <th className="border px-4 py-2">Subtotal</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-end">
        <div className="text-xl font-bold">
          Total: $0.00 {/* You can replace this with your logic */}
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => {}}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
