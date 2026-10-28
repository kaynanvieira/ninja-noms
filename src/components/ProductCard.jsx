import { Link } from "react-router-dom";

function ProductCard({ name, description, image, price }) {
    return(
        <div className="product-card">
            <div className="product-info">
                <h2>{name}</h2>
                <p>{description}</p>
                {price && <span className="price">R$ {price.toFixed(2)}</span>}
                <Link to="/ingredientes" className="button">
                Ingredientes
                </Link>
            </div>
            <div className="product-image">
                <img src={image} alt={name} />
            </div>
        </div>
    );
}

export default ProductCard;