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
          Desfrute da autenticidade e da deliciosa culinária japonesa em nosso
          menu de comidas rápidas...
        </p>
      </section>

      <section className="products-list">
        {japaneseProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            image={product.image}
            price={product.price}
          />
        ))}
      </section>
    </div>
  );
}

export default Products;