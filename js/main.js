const controle = document.querySelectorAll("[data-controle]");

controle.forEach((element) => {
    element.addEventListener('click', (event) => handleData(event.target.dataset.controle, event.target.parentNode));
})

function handleData(operacao, controle) {
    const peca = controle.querySelector('.controle-contador');

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}