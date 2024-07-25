const btnAvancar = document.getElementById("btn-avancar");

const btnVoltar = document.getElementById("btn-voltar");

const cartoes = document.getElementsByClassName("cartao")

let cartaoAtual = 0;

btnAvancar.addEventListener("click", function(){
    const ehUltimoLista = cartaoAtual === cartoes.length - 1;
    console.log(ehUltimoLista);
    if(ehUltimoLista) return;

    esconderCartaoSelecionado();
    cartaoAtual++;
    mostrarCartao();

})

btnVoltar.addEventListener("click", function(){
    const ehPrimeiroCartao = cartaoAtual === 0;
    if(ehPrimeiroCartao) return;

    esconderCartaoSelecionado();
    cartaoAtual--;
    mostrarCartao();
})

function mostrarCartao (){
cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado");

    cartaoSelecionado.classList.remove("selecionado");
}