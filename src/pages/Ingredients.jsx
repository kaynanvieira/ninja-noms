import products from "../data/products";

function Ingredients() {
  return (
    <div>
      <section className="top">
        <h1>Ingredientes</h1>
        <p>
          Descubra a qualidade dos ingredientes frescos e cuidadosamente
          selecionados em nossa variedade de pratos japoneses...
        </p>
      </section>

      <section className="ingredients-list">
        {products.map((product) => (
          <div key={product.id} className="ingredient-card">
            <div className="ingredient-info">
              <h2>{product.name}</h2>

              <h3>Ingredientes</h3>
              <ul>
                {product.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3>Preparo</h3>
              <ol>
                {product.preparation.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>

            <div className="ingredient-image">
              <img src={product.image} alt={product.name} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Ingredients;