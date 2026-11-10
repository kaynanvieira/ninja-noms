
function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo-column">
          <img className="logoF" src="/imagens/favicon.ico" alt="Ninja Noms" />
          <h3>Ninja Noms</h3>
        </div>

        <div className="column-footer">
          <h4>Email</h4>
          <p>Nosso time está aqui para ajudar</p>
          <p><span>lorem.ipsum@dolor.com</span></p>
        </div>

        <div className="column-footer">
          <h4>Endereço</h4>
          <p>Venha nos fazer uma visita</p>
          <p><span>Rua Lorem, Número 10, Nova Friburgo, RJ</span></p>
        </div>

        <div className="column-footer">
          <h4>Telefone</h4>
          <p>De 08:00 até às 18:00</p>
          <p><span>(22) 99999-9999</span></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;