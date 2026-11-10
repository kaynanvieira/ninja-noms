import products from "../data/products";
import { useCart } from "../context/CartContext";

function Ecommerce() {
  const { cart, addToCart, updateQuantity, removeFromCart, clearCart } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  function handleCheckout() {
    if (cart.length === 0) return;
    alert(`Pedido registrado no valor de R$ ${total.toFixed(2)}! Aguardando pagamento.`);
    clearCart();
  }

  return (
    <div>
      <section className="top">
        <h1>E-commerce</h1>
        <p>Selecione seus itens abaixo para montar o seu pedido em tempo real.</p>
      </section>

      {/* Grade de Vitrine */}
      <section className="container">
        <h2>Cardápio</h2>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="column">
              <figure>
                <img src={product.image} alt={product.name} />
                <figcaption>
                  <strong>{product.name}</strong>
                  <p className="price-tag">R$ {product.price.toFixed(2)}</p>
                </figcaption>
              </figure>
              <button className="button-add" onClick={() => addToCart(product)}>
                Adicionar
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Área do Carrinho */}
      <section id="cart-section">
        <h2>Seu Carrinho</h2>
        {cart.length === 0 ? (
          <p className="cart-empty">Seu carrinho está vazio no momento.</p>
        ) : (
          <div className="cart-wrapper">
            <ul className="cart-items">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p className="item-unit-price">
                      R$ {item.price.toFixed(2)} un.
                    </p>
                  </div>

                  {/* Controles de Quantidade (+ e -) */}
                  <div className="qty-controls">
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="qty-number">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>

                  <div className="item-total-price">
                    <strong>R$ {(item.quantity * item.price).toFixed(2)}</strong>
                  </div>

                  <button
                    className="button-remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>

            <div className="cart-summary">
              <h3>
                Total: <span>R$ {total.toFixed(2)}</span>
              </h3>
              <button className="button" onClick={handleCheckout}>
                Finalizar Compra
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Ecommerce;