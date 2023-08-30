import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { cartReducer, initialState } from "./CartReducer";
import {
  getCartByUserId,
  getCartWithProduct,
  addCartLine,
  removeProductFromCart,
} from "../services/ApiService";

const CartContext = createContext({
  cart: null,
  fetchCart: () => {},
  fetchCartWithProduct: () => {},
  addProductToCart: () => {},
  removeFromCart: () => {},
});

function CartProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const userId = localStorage.getItem("userId");

  async function fetchCart() {
    console.info("fetchCart userId :>> ", userId);
    try {
      const userCart = await getCartByUserId(userId);
      console.info("userCart :>> ", userCart);
      localStorage.setItem("cartId", userCart.id);
      dispatch({ type: "SET_CART", payload: userCart });
    } catch (error) {
      console.error("Error fetching or creating cart:", error);
    }
  }
  async function fetchCartWithProduct() {
    const cartId = localStorage.getItem("cartId");
    console.info("fetchCart userId :>> ", cartId);
    try {
      const userCart = await getCartWithProduct(cartId);
      console.info("userCart :>> ", userCart);
      localStorage.setItem("cartId", userCart.id);
      dispatch({ type: "SET_CART", payload: userCart });
    } catch (error) {
      console.error("Error fetching or creating cart:", error);
    }
  }

  useEffect(() => {
    if (!isLogged) return;

    fetchCart();
  }, [userId, isLogged]);

  const removeFromCart = async (productId) => {
    const updatedCart = await removeProductFromCart(state.cart.id, productId);
    dispatch({ type: "SET_CART", payload: updatedCart });
  };

  const addProductToCart = async (product) => {
    if (!product || !product.id) {
      console.error("Invalid product:", product);
      return;
    }
    const cartId = localStorage.getItem("cartId");

    try {
      const newCartLine = await addCartLine({
        cartId: parseInt(cartId, 10),
        productId: product.id,
        quantity: 1,
      });

      if (newCartLine && newCartLine.id) {
        dispatch({ type: "ADD_ITEM", payload: newCartLine });
      } else {
        console.error(
          "Failed to add product to cart. Invalid response:",
          newCartLine
        );
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  const value = useMemo(
    () => ({
      cart: state.cart,
      addProductToCart,
      removeFromCart,
      isLogged,
      setIsLogged,
      fetchCart,
      fetchCartWithProduct,
    }),
    [state.cart, addProductToCart, removeFromCart, isLogged]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };
