import "./Product.css";
import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContextProvider";
import Toast from "../Toast/Toast";

export default function Product({ product }) {
  const { addProductToCart } = useContext(UserContext);
  const { name, image, price, description, stock } = product;
  const [isToastVisible, setToastVisibility] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleAddToCart = () => {
    try {
      addProductToCart(product);
      setToastMessage("Produit ajouté au panier");
    } catch (error) {
      setToastMessage("Erreur lors de l'ajout du produit au panier");
    } finally {
      setToastVisibility(true);
      setTimeout(() => {
        setToastVisibility(false);
      }, 3000);
    }
  };

  return (
    <div className="product-card">
      <h3 className="product-title">{name}</h3>
      <img className="product-image" src={image} alt={name} />
      <div className="product-description">{description}</div>
      <div className="product-footer">
        <button
          className="product-button"
          type="button"
          onClick={handleAddToCart}
        >
          Ajouter au panier
        </button>
        <div className="product-infos">
          <span className="product-price">{price} €</span>
          <span className="product-stock">En stock : {stock}</span>
        </div>
      </div>
      <Toast show={isToastVisible} message={toastMessage} />
    </div>
  );
}
