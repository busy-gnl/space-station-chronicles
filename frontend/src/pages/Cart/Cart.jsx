import "./Cart.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContextProvider";

export default function Cart() {
  const { getAllProductsInCart, removeFromCart, updateProductQuantity } =
    useContext(UserContext);
  const cart = getAllProductsInCart();

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleQuantityChange = (e, productId) => {
    const newQuantity = parseInt(e.target.value, 10);
    updateProductQuantity(productId, newQuantity);
  };

  // Calcul du prix total du panier, arrondi au centime près
  const totalPrice = parseFloat(
    cart
      .reduce((acc, product) => acc + product.price * product.quantity, 0)
      .toFixed(2)
  );

  return (
    <div>
      <section className="cart-articles-section">
        <h2>Votre panier</h2>
        <div className="cart-list">
          {cart.map((product) => {
            const productTotalPrice = parseFloat(
              (product.price * product.quantity).toFixed(2)
            ); // Prix cumulé par produit, arrondi

            return (
              <div className="cart-line" key={product.id}>
                <img
                  className="cart-product-image"
                  src={product.image}
                  alt={product.name}
                />
                <div className="cart-infos">
                  <span className="cart-product-name">{product.name}</span>
                  <span className="cart-product-price">
                    {product.price.toFixed(2)} €
                  </span>
                  <span className="cart-product-total-price">
                    {productTotalPrice.toFixed(2)} €
                  </span>
                  <input
                    type="number"
                    value={product.quantity}
                    onChange={(e) => handleQuantityChange(e, product.id)}
                    min="1"
                  />
                </div>
                <div className="cart-buttons">
                  <button
                    className="cart-button"
                    type="button"
                    onClick={() => handleRemoveFromCart(product.id)}
                  >
                    <i className="fas fa-trash fa-xl" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-total-price">
          Prix total du panier : {totalPrice.toFixed(2)} €
        </div>
        <button className="cart-submit" type="button">
          Valider le panier
        </button>
      </section>
    </div>
  );
}
