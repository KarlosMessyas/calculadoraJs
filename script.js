window.addEventListener("load", () => {
    const buttons = document.querySelectorAll('.botão');
    const resultado = document.getElementById('resultado');
    let conteudoResultado = "";

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const valueButton = button.textContent;

            if (valueButton === 'C') {
                conteudoResultado = "";
            } else if (valueButton === '<') {
                conteudoResultado = conteudoResultado.slice(0, -1);
            } 
            else if (valueButton === '=') {
                if(conteudoResultado) {
                    conteudoResultado = eval(conteudoResultado);
                }
            }
            else {
                conteudoResultado += valueButton;
            }

            resultado.textContent = conteudoResultado;
        });
    });
});
