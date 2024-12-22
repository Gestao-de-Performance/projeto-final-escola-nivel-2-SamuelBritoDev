let button = document.getElementById('theme-toggle');
let body = document.body;
let footer = document.querySelector('footer');
let allText = document.querySelectorAll('.corText');
let allBorders = document.querySelectorAll('.borda');

// Alternar entre os modos claro e escuro
button.addEventListener('click', () => {
    // Alterna as classes de tema
    body.classList.toggle('light-mode');
    body.classList.toggle('fundoPagina');
    footer.classList.toggle('light-mode');
    

    // Muda o ícone do botão
    if (body.classList.contains('fundoPagina')) {
        button.textContent = '🌝'; // Ícone para o tema escuro
        button.style.background = 'black'
    } else {
        button.textContent = '🌚'; // Ícone para o tema claro
        button.style.background = "white"
    }
});

let trocandocor = document.querySelector(".mudarcor")
trocandocor.addEventListener("mousemove",()=> {
    trocandocor.style.background = "#FFDB58"
})  

trocandocor.addEventListener("mouseout", () => {
    // Verifica o tema atual e ajusta a cor
    if (body.classList.contains('fundoPagina')) {
        trocandocor.style.background = "black"; // Cor do tema escuro
    } else {
        trocandocor.style.background = "white"; // Cor do tema claro
    }
}); 