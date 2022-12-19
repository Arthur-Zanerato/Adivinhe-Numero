function verificaChute(chute) {
  const numero = +chute;

  if (chuteInvalido(numero)) {
    elementoChute.innerHTML += "<div>Valor inválido!</div>";

    if (chute.toUpperCase() === "GAME OVER") {

      document.body.innerHTML =
          `
          <h2 class="go-h2">GAME OVER!</h2>
          <h3 class="go-h3">Pressione o botão para jogar novamente</h3>
          <button id="jogar-novamente" class="go-btn" >Jogar novamente</button>
          `
          document.body.style.backgroundColor = "black";
  } else {

      elementoChute.innerHTML += '<div>Valor Inválido</div>';
  }

    return;
  }
  
  if (numeroMaiorMenor(numero)) {
    elementoChute.innerHTML += `<div>Fale um número entre ${menorValor} e ${maiorValor}</div>`;
    return;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
        <h2>Parabéns, você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar"> JOGAR NOVAMENTE </button>
    `;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `<div>Dica: o número secreto é menor <i class="fa-solid fa-arrow-down"></i></div> `;
  } else {
    elementoChute.innerHTML += `<div>Dica: o número secreto é maior <i class="fa-solid fa-arrow-up"></i></div> `;
  }
}

function chuteInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroMaiorMenor(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", (event) => {
  if (event.target.id == "jogar-novamente") {
    window.location.reload();
  }
});
