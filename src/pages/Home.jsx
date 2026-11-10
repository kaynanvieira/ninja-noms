import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section id="container">
        <div className="text-content">
          <h1>Ninja Noms</h1>
          <p>Onde todos os ingredientes contam uma história</p>
        </div>

        <div className="image-content">
          <img src="/imagens/Fcomida-japonesa.jpg" alt="Comida Japonesa" />
        </div>
      </section>

      <section>
        <div className="box_center">
          <h2>Ninja Noms</h2>
          <p>
            Descubra uma incrível variedade de comida japonesa autêntica e
            deliciosa. Dos clássicos sushis aos irresistíveis pratos de fast food.
          </p>
          <br />
        </div>

        <div className="box_images">
          <div className="boxes_images">
            <img src="/imagens/Rectangle2.png" alt="Ingredientes" />
            <h3>
              <Link to="/produtos" className="button">
                Produtos
              </Link>
            </h3>
          </div>

          <div className="boxes_images">
            <img src="/imagens/moeda.png" alt="E-commerce" />
            <h3>
              <Link to="/ecommerce" className="button">
                E-commerce
              </Link>
            </h3>
          </div>

          <div className="boxes_images">
            <img src="/imagens/fastfood.png" alt="Fast Food" />
            <h3>
              <Link to="/fastfood" className="button">
                Fast Food
              </Link>
            </h3>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
    </div>
  );
}

export default Home;