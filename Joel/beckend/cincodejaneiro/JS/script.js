function isFilled(id) {
    let elemento = document.getElementById(id);
    if (elemento.value.length < 5) {
        elemento.className = "erro";
        // Remove a classe 'preto' após 1000 milissegundos (1 segundo)
        setTimeout(() => {
            elemento.classList.remove("erro");
        }, 1000);
    } else {
        elemento.className = "sucesso";
        // Remove a classe 'preto' após 1000 milissegundos (1 segundo)
        setTimeout(() => {
            elemento.classList.remove("sucesso");
        }, 1000);
    }
}
