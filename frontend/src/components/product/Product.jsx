import "./Product.css";
import { useState, useContext } from "react";
import Toast from "../Toast/Toast";
import { CartContext } from "../../contexts/CartContextProvider";

export default function Product({ product }) {
  const { addProductToCart, updateProductInCart, cart, isLogged } =
    useContext(CartContext);
  const { name, image, price, description, stock } = product;
  const [isToastVisible, setToastVisibility] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleAddToCart = async () => {
    if (!isLogged) {
      setToastMessage("Vous devez être connecté pour ajouter un produit");
      setToastVisibility(true);
      setTimeout(() => {
        setToastVisibility(false);
      }, 3000);
      return;
    }
    console.info("cart :>> ", cart);
    try {
      // Vérifiez si le produit existe déjà dans le panier
      if (cart && Array.isArray(cart.cartLines)) {
        const existingProduct = cart.cartLines.find(
          (item) => item.productId === product.id
        );

        if (existingProduct) {
          // Si le produit existe déjà, augmentez simplement sa quantité
          updateProductInCart(existingProduct.id, {
            quantity: existingProduct.quantity + 1,
          });
          setToastMessage("+1 ajouté au panier");
        }
      } else {
        // Sinon, ajoutez un nouveau produit au panier
        addProductToCart(product);
      }

      setToastMessage("Produit ajouté au panier");
    } catch (error) {
      console.error("Error adding product to cart:", error);
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
