const palavras = [
    "JAVASCRIPT",
    "PROGRAMACAO",
    "DESENVOLVEDOR",
    "COMPUTADOR",
    "ALGORITMO",
    "CODIGO",
    "FRONTEND",
    "BACKEND",
    "NAVEGADOR",
    "BANCO"
];
let palavraSecreta = '';
let letrasCorretas = [];
let letrasErradas = [];
let tentativasRestantes = 6;
const palavrasEl = document.getElementById('palavra');
const letrasEl = document.getElementById('letras');
const tentativasEl = document.getElementById('tentativas');
const entrada = document.getElementById('entrada');
const mensagem = document.getElementById('mensagem');
const partes = [
    document.querySelector('.cabeca'),
    document.querySelector('.tronco'),
    document.querySelector('.braco-esq'),
    document.querySelector('.braco-dir'),
    document.querySelector('.perna-esq'),
    document.querySelector('.perna-dir')
];
function sortearPalavra(){
    const index = Math.floor(Math.random() * palavras.length);
    return palavras[index];
}
function iniciarJogo(){
    palavraSecreta = sortearPalavra();
    letrasCorretas = [];
    letrasErradas = [];
    tentativasRestantes = 6;
    entrada.disabled = false;
    mensagem.textContent = '';
    atualizarTela();
}
function atualizarTela(){
    palavrasEl.textContent = palavraSecreta.split('').map(letra => (letrasCorretas.includes(letra) ? letra : '_')).join(' ');
    letrasEl.textContent = letrasErradas.join(', ');
    tentativasEl.textContent = tentativasRestantes;
    partes.forEach((parte, index) =>{
        parte.style.display = index < letrasErradas.length ? 'block' : 'none';
    });
    if(!palavrasEl.textContent.includes('_')){
        mensagem.textContent = '🎉 Você venceu!';
        entrada.disabled = true;
    }
    if(tentativasRestantes <= 0){
        mensagem.textContent = `💀 Você perdeu! A palavra era "${palavraSecreta}"`;
        entrada.disabled = true;
    }
}
entrada.addEventListener('input', ()=>{
    const letra = entrada.value.toUpperCase();
    entrada.value = '';
    if(!letra.match(/[A-Z]/) || letra.length !== 1 || letrasCorretas.includes(letra) || letrasErradas.includes(letra)){
        return;
    }
    if(palavraSecreta.includes(letra)){
        letrasCorretas.push(letra);
    } else{
        letrasErradas.push(letra);
        tentativasRestantes--;
    }
    atualizarTela();
});
iniciarJogo();