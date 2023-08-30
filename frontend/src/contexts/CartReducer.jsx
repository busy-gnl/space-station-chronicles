export const initialState = {
  cart: null,
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART": {
      return { ...state, cart: action.payload };
    }
    case "ADD_ITEM": {
      const newItem = action.payload;
      const existingCartLines = state.cart?.cartLines ?? [];
      return {
        ...state,
        cart: {
          ...state.cart,
          cartLines: [...existingCartLines, newItem],
        },
      };
    }
    case "REMOVE_ITEM": {
      const updatedCartLines = state.cart.cartLines.filter(
        (cartLine) => cartLine.id !== action.payload
      );
      return { ...state, cart: { ...state.cart, cartLines: updatedCartLines } };
    }
    default:
      return state;
  }
};
