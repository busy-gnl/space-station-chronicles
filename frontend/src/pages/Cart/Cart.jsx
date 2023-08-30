import "./Cart.css";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../contexts/CartContextProvider";

export default function Cart() {
  const [products, setProducts] = useState([]);
  const { fetchCartWithProduct } = useContext(CartContext);
  const [cart, setCart] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const cartWithProduct = await fetchCartWithProduct();
      setCart(cartWithProduct);
      console.info("cartWithProduct :>> ", cartWithProduct);
      if (cartWithProduct && cartWithProduct.cartLines) {
        setProducts(cartWithProduct.cartLines);
      }
    }
    fetchData();
  }, []);
  console.info("cart :>> ", cart);
  console.info("products :>> ", products);

  return (
    <div>
      <section className="cart-articles-section">
        <h2>Votre panier</h2>
        <div className="cart-list">
          {products.map((product) => (
            <div className="cart-line" key={product.id}>
              <img
                className="cart-product-image"
                src={product.image}
                alt={product.name}
              />
              <div className="cart-infos">
                <span className="cart-product-name">{product.name}</span>
                <span className="cart-product-price">{product.price} €</span>
              </div>
              <div className="cart-buttons">
                <button className="cart-button" type="button">
                  <i className="fas fa-trash fa-xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="cart-submit" type="button">
          Valider le panier
        </button>
      </section>
    </div>
  );
}
