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
                Saboreie a conveniência e o sabor delicioso do fast food. Seja um hambúrguer suculento, batatas fritas crocantes ou um hot dog, nossas opções de fast food são perfeitas para satisfazer aquela vontade rápida e saborosa. 
                </p>
            </section>

            <section className="products-list">
                {fastFoodProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
                ))}
            </section>
        </div>
    )
};

export default FastFood;