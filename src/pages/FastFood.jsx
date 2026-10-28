import ProductCard from "../components/ProductCard";
import products from "../data/products";

function FastFood (){
    const fastFoodProducts = products.filter(
        (item) => item.category === "fast-food"
    );

    return(
        <div>
            <section className="top">
                <h1>Produtos</h1>
                <p>
                Desfrute da autenticidade do Fast Food em nosso
                menu de comidas rápidas...
                </p>
            </section>

            <section className="products-list">
                {fastFoodProducts.map((product) => (
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
    )
};

export default FastFood;