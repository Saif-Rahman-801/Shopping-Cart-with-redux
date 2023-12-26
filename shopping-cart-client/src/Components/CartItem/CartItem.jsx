/* eslint-disable react/prop-types */

// import { useDispatch } from "react-redux";


const CartItem = ({ item }) => {
    // const dispatch = useDispatch()
  return (
    <tr>
      <td className="border px-4 py-2">{item.productName} </td>
      <td className="border px-4 py-2">${item.price.toFixed(2)} u</td>
      <td className="border px-4 py-2">
        <div className="flex items-center">
          <button className="bg-blue-500 text-white px-2 py-1" onClick={() => {}}>
            -
          </button>
          <input
            type="number"
            className="w-8 text-center border mx-2"
            value={item.quantity}
            onChange={() => {}}
          />
          <button className="bg-blue-500 text-white px-2 py-1" onClick={() => {}}>
            +
          </button>
        </div>
      </td>
      <td className="border px-4 py-2">${(item.price * item.quantity).toFixed(2)}</td>
      <td className="border px-4 py-2">
        <button className="text-red-500" onClick={() => {}}>
        Delete
        </button>
      </td>




    </tr>
  );
};

export default CartItem;
