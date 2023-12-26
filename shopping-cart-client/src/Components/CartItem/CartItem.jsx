/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  MODIFY_QUANTITY,
  REMOVE_FROM_CART,
} from "../../Store/action-types/cart";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const dispatch = useDispatch();

  return (
    <tr>
      <td className="border px-4 py-2">{item.productName} </td>
      <td className="border px-4 py-2">${item.price.toFixed(2)} u</td>
      <td className="border px-4 py-2">
        <div className="flex items-center">
          <button
            className="bg-blue-500 text-white px-2 py-1"
            onClick={() => {
              if (quantity >= 1) {
                setQuantity((prevState) => {
                  dispatch({
                    type: MODIFY_QUANTITY,
                    payload: {
                      id: item._id,
                      quantity: prevState - 1,
                    },
                  });
                  return prevState - 1;
                });
              }
            }}
          >
            -
          </button>
          <input
            type="number"
            className="w-8 text-center border mx-2"
            value={quantity}
            onChange={(e) => {
              setQuantity(() => {
                dispatch({
                  type: MODIFY_QUANTITY,
                  payload: {
                    id: item._id,
                    quantity: parseInt(e.target.value),
                  },
                });
                return parseInt(e.target.value);
              });
            }}
          />
          <button
            className="bg-blue-500 text-white px-2 py-1"
            onClick={() => {
              if (quantity >= 1) {
                setQuantity((prevState) => {
                  dispatch({
                    type: MODIFY_QUANTITY,
                    payload: {
                      id: item._id,
                      quantity: prevState + 1,
                    },
                  });
                  return prevState + 1;
                });
              }
            }}
          >
            +
          </button>
        </div>
      </td>
      <td className="border px-4 py-2">
        ${(item.price * item.quantity)}
      </td>
      <td className="border px-4 py-2">
        <button
          className="text-red-500"
          onClick={() =>
            dispatch({
              type: REMOVE_FROM_CART,
              payload: { id: item.id },
            })
          }
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
