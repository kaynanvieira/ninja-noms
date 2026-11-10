import products from "../data/products";


function Ingredients (){
    return(
        <div>
            <section>
                <h1>Ingredientes</h1>
                <p>Descubra a qualidade dos ingredientes frescos e cuidadosamente selecionados em nossa variedade de pratos japoneses. Cada ingrediente é escolhido com atenção, desde o peixe fresco e saboroso até o arroz de alta qualidade e os vegetais crocantes. Nossa prioridade é oferecer uma experiência gastronômica autêntica, trazendo até você o melhor da culinária japonesa em forma de fast food. Aprecie a fusão de sabores únicos e a textura perfeita de cada mordida. Deixe-se encantar pelas nuances sutis dos temperos e desfrute de uma refeição rápida, mas repleta de autenticidade. Nossos ingredientes de qualidade são a base para a criação de pratos japoneses deliciosos e memoráveis.</p>
            </section>

            <section className="ingredients-list">
        {products.map((product) => (
          <div key={product.id} className="ingredient-card">
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

            <img src={product.image} alt={product.name} />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Ingredients;