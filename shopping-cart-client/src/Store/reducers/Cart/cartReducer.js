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
            },
          ];
    }
    case REMOVE_FROM_CART: {
      return;
    }
    case CLEAR_CART: {
      return;
    }
    case MODIFY_QUANTITY: {
      return;
    }

    default: {
      return state;
    }
  }
};
