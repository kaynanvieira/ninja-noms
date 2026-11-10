import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <div className="product-actions">
          {product.price && (
            <span className="price">R$ {product.price.toFixed(2)}</span>
          )}
          <Link to="/ingredientes" className="button">
            Ingredientes
          </Link>
          <button className="button" onClick={() => addToCart(product)}>
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
    </div>
  );
}

export default ProductCard;