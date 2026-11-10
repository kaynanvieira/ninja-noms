import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Products() {
  const japaneseProducts = products.filter(
    (item) => item.category === "comida-japonesa"
  );

  return (
    <div>
      <section className="top">
        <h1>Produtos</h1>
        <p>
          Desfrute da autenticidade e da deliciosa culinária japonesa em nosso menu de comidas rápidas. Seja um saboroso temaki, um irresistível hot roll ou um apetitoso sushi, nossas opções de japonês são perfeitas para satisfazer seus desejos de forma rápida e saborosa.
        </p>
      </section>

      <section className="products-list">
        {japaneseProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}

export default Products;