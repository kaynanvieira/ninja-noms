import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { totalItemsCount } = useCart();

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src="/imagens/favicon.ico" alt="Ninja Noms Logo" />
        </Link>
      </div>

      <nav>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/ingredientes">Ingredientes</Link>
          </li>
          <li>
            <Link to="/fastfood">Fast Food</Link>
          </li>
          <li>
            <Link to="/ecommerce" className="ecommerce-link">
              E-commerce
              {totalItemsCount > 0 && (
                <span className="cart-badge">{totalItemsCount}</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;