import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { totalItemsCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  function handleNavigation(path) {
    setMenuOpen(false);
    navigate(path);
  }

  return (
    <>
      <header>
        {/* Botão Hambúrguer */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir Menu"
          type="button"
        >
          ☰
        </button>

        {/* Logo central */}
        <div className="logo">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src="/imagens/favicon.ico" alt="Ninja Noms Logo" />
          </Link>
        </div>

        {/* Menu Desktop */}
        <nav className="desktop-nav">
          <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/ingredientes">Ingredientes</Link></li>
            <li><Link to="/fastfood">Fast Food</Link></li>
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

        {/* Ícone de carrinho no topo mobile */}
        <Link
          to="/ecommerce"
          className="header-cart-icon"
          onClick={() => setMenuOpen(false)}
          aria-label="Carrinho"
        >
          <svg
            className="cart-svg-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#19181e"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          {totalItemsCount > 0 && (
            <span className="cart-badge-icon">{totalItemsCount}</span>
          )}
        </Link>
      </header>

      {/* Drawer Lateral Mobile separado do header */}
      <aside className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <span className="drawer-title">Menu</span>
          <button
            className="drawer-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Fechar Menu"
            type="button"
          >
            ✕
          </button>
        </div>

        <ul className="drawer-menu">
          <li>
            <button
              type="button"
              className="drawer-link"
              onClick={() => handleNavigation("/")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              type="button"
              className="drawer-link"
              onClick={() => handleNavigation("/produtos")}
            >
              Produtos
            </button>
          </li>
          <li>
            <button
              type="button"
              className="drawer-link"
              onClick={() => handleNavigation("/ingredientes")}
            >
              Ingredientes
            </button>
          </li>
          <li>
            <button
              type="button"
              className="drawer-link"
              onClick={() => handleNavigation("/fastfood")}
            >
              Fast Food
            </button>
          </li>
          <li>
            <button
              type="button"
              className="drawer-link drawer-link-ecommerce"
              onClick={() => handleNavigation("/ecommerce")}
            >
              <span>E-commerce</span>
              {totalItemsCount > 0 && (
                <span className="cart-badge-drawer">{totalItemsCount}</span>
              )}
            </button>
          </li>
        </ul>
      </aside>

      {/* Fundo escuro clicável */}
      {menuOpen && (
        <div
          className="menu-backdrop"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Header;