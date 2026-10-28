function compras(item, nome, preco) {
    let res = document.getElementById("res");
    let imagePath = getImagePath(item);
  
    res.innerHTML = `
    <div class="res-item">
      <img src="${imagePath}" alt="${nome}">
      <div class="res-item-details">
        <h3>${nome}</h3>
        <p>${preco}</p>
        <button onclick="exibirAlerta()" >Comprar</button>
      </div>
    </div>
  `;

}
  function getImagePath(item){
    let aux = ""
    if (item === "temaki") {
        aux = "../Imagens/temaki1.jpg";
    }
    else if (item === "tekamaki") {
        aux = "../Imagens/tekamaki.png";
    }
        else if (item === "Hot Roll") {
        aux = "../Imagens/hot-roll1.png";
    } 
        else if (item === "Hot Filadélfia") {
          aux = "../Imagens/hotfiladelfia.jpg";
    } 
        else if (item === "Batata Frita") {
          aux = "../Imagens/batata.jpg";
    } 
        else if (item === "Hamburguer") {
          aux = "../Imagens/cheeseburger-delicioso.jpg";
    } 
        else if (item === "Hot Dog") {
            aux = "../Imagens/hotdog.jpg";
        } 
        else if (item === "Pizza") {
            aux = "../Imagens/fatia-de-pizza-fresca-com-calabresa-em-branco.jpg";
        }
        return aux; 
    }

    function exibirAlerta(){
        alert("O sistema de compras está em manutenção. Tente novamente mais tarde!")
    }
