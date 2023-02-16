const controle = document.querySelectorAll('.controle-ajuste');

controle.forEach((element) => {
    element.addEventListener('click', (event) => handleData(event.target.textContent));
})

function handleData(operacao) {
    if (operacao === "-") {
        braco.value = parseInt(braco.value) - 1;
    } else {
        braco.value = parseInt(braco.value) + 1
    }
}