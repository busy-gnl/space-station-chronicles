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

  const handleQuantityChange = (action, productId, inputElement) => {
    let newQuantity;
    const currentValue = parseInt(inputElement.value, 10);

    if (action === "increase") {
      newQuantity = currentValue + 1;
    } else if (action === "decrease") {
      newQuantity = Math.max(currentValue - 1, 1);
    } else if (action === "input") {
      newQuantity = parseInt(inputElement.value, 10);
    }

    inputElement.value = newQuantity; // eslint-disable-line no-param-reassign
    updateProductQuantity(productId, newQuantity);
  };

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
            );
            return (
              <div className="cart-line" key={product.id}>
                <img
                  className="cart-product-image"
                  src={product.image}
                  alt={product.name}
                />
                <div className="cart-infos">
                  <span className="cart-product-name">{product.name}</span>
                  <div className="cart-price-infos">
                    <span className="cart-product-price">
                      Prix unitaire : {product.price.toFixed(2)} €
                    </span>
                    <span className="cart-product-total-price">
                      Total produit : {productTotalPrice.toFixed(2)} €
                    </span>
                  </div>
                  <div className="cart-quantity">
                    <label htmlFor="quantity">Quantité :</label>
                    <button
                      type="button"
                      className="button-quantity"
                      onClick={(e) =>
                        handleQuantityChange(
                          "decrease",
                          product.id,
                          e.target.previousSibling
                        )
                      }
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      max="100"
                      className="custom-number-input"
                      value={product.quantity}
                      onChange={(e) =>
                        handleQuantityChange("input", product.id, e.target)
                      }
                    />
                    <button
                      type="button"
                      className="button-quantity"
                      onClick={(e) =>
                        handleQuantityChange(
                          "increase",
                          product.id,
                          e.target.nextSibling
                        )
                      }
                    >
                      +
                    </button>
                  </div>
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
