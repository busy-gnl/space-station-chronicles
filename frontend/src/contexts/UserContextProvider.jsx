import React, {
  createContext,
  useState,
  useReducer,
  useEffect,
  useMemo,
} from "react";

export const UserContext = createContext();

const initialState = {
  cart: [],
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      return { ...state, cart: action.payload };
    case "ADD_ITEM":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "UPDATE_ITEM":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    default:
      return state;
  }
};

export function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const existingCart = localStorage.getItem("cart");
    if (existingCart) {
      dispatch({ type: "SET_CART", payload: JSON.parse(existingCart) });
    }
  }, []);

  const addProductToCart = (product) => {
    const existingProduct = state.cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedProduct = {
        ...existingProduct,
        quantity: existingProduct.quantity + 1,
      };
      dispatch({ type: "UPDATE_ITEM", payload: updatedProduct });
    } else {
      dispatch({ type: "ADD_ITEM", payload: { ...product, quantity: 1 } });
    }

    localStorage.setItem("cart", JSON.stringify(state.cart));
  };

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_ITEM", payload: productId });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  };

  const updateProductQuantity = (productId, quantity) => {
    const existingProduct = state.cart.find((item) => item.id === productId);

    if (existingProduct) {
      const updatedProduct = { ...existingProduct, quantity };
      dispatch({ type: "UPDATE_ITEM", payload: updatedProduct });
    }

    localStorage.setItem("cart", JSON.stringify(state.cart));
  };

  const getAllProductsInCart = () => {
    return state.cart;
  };

  const value = useMemo(
    () => ({
      cart: state.cart,
      addProductToCart,
      removeFromCart,
      updateProductQuantity,
      isLogged,
      setIsLogged,
      getAllProductsInCart,
    }),
    [state.cart, addProductToCart, removeFromCart, isLogged]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
