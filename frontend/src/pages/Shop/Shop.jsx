import "./Shop.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../../components/product/Product";

export default function Shop() {
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${backendURL}/products`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="shop">
      <h1>Shop</h1>
      <section className="shop-catalog-section">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
