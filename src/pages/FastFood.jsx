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
                DSaboreie a conveniência e o sabor delicioso do fast food. Seja um hambúrguer suculento, batatas fritas crocantes ou um hot dog, nossas opções de fast food são perfeitas para satisfazer aquela vontade rápida e saborosa. Preparados com ingredientes frescos e uma dose de paixão culinária, nossos pratos são a solução perfeita para quando você está com pressa, mas não quer abrir mão do prazer da comida.
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