import { useState } from "react";
import products from "../data/products";

function Ecommerce() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleBuy() {
    alert("O sistema de compras está em manutenção. Tente novamente mais tarde!");
  }

  return (
    <div>
      <section className="top">
        <h1>E-commerce</h1>
        <p>
          Explore a comodidade e a praticidade do nosso E-commerce especializado
          em comida japonesa. Escolha seu produto favorito abaixo!
        </p>
      </section>

      <section className="container">
        <h2>Nossos Produtos</h2>
        <div className="row">
          {products.map((product) => (
            <div
              key={product.id}
              className="column"
              onClick={() => setSelectedProduct(product)}
              style={{ cursor: "pointer" }}
            >
              <figure>
                <img src={product.image} alt={product.name} />
                <figcaption>
                  <strong>{product.name}</strong> - R$ {product.price.toFixed(2)}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </section>

      <section id="res">
        {selectedProduct ? (
          <div className="res-item">
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <div className="res-item-details">
              <h3>{selectedProduct.name}</h3>
              <p>R$ {selectedProduct.price.toFixed(2)}</p>
              <button onClick={handleBuy}>Comprar</button>
            </div>
          </div>
        ) : (
          <p style={{ textAlign: "center", color: "#666" }}>
            Clique em qualquer prato acima para ver os detalhes da compra.
          </p>
        )}
      </section>
    </div>
  );
}

export default Ecommerce;