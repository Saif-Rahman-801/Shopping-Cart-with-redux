import {
  ADD_TO_CART,
  CLEAR_CART,
  MODIFY_QUANTITY,
  REMOVE_FROM_CART,
} from "../../action-types/cart";

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      // Checking if the product is already added in the cart
      const product = state.find((item) => item.id === action.payload.id);

      //   Increasing the quantity on adding a product twice
      return product
        ? state.map((item) => {
            if (item.id === product.id) {
              item.quantity = item.quantity + 1; // update the quantity in the db
            }

            return item;
          })
        : [
            // post new product to the in the db
            ...state,
            {
              ...action.payload,
              quantity: 1,
            },
          ];
    }
    case REMOVE_FROM_CART: {
      // delete from the db
      return state.filter((item) => item.id !== action.payload.id);
    }
    case MODIFY_QUANTITY: {
        // update quantity again
      return state.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity === action.payload.quantity;
        }
      });
    }
    case CLEAR_CART: {
        // clear the whole cart from the db
      return []
    }

    default: {
      return state;
    }
  }
};
