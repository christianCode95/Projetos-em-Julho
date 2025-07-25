const cores = [
    {
        nome: "vermelho", valor: "red"
    },
    {
        nome: "azul", valor: "blue"
    },
    {
        nome: "verde", valor: "green"
    },
    {
        nome: "amarelo", valor: "yellow"
    },
    {
        nome: "roxo", valor: "purple"
    },
    {
        nome: "laranja", valor: "orange"
    },
    {
        nome: "rosa", valor: "pink"
    },
    {
        nome: "marrom", valor: "brown"
    },
    {
        nome: "cinza", valor: "gray"
    },
    {
        nome: "preto", valor: "black"
    },
    {
        nome: "branco", valor: "white"
    },
    {
        nome: "ciano", valor: "cyan"
    },
    {
        nome: "magenta", valor: "magenta"
    },
    {
        nome: "dourado", valor: "gold"
    },
    {
        nome: "prata", valor: "silver"
    }
]
const corAlvo = document.getElementById('cor-alvo');
const bolinhas = document.getElementById('bolinhas');
const mensagem = document.getElementById('mensagem');
const pontosEl = document.getElementById('pontos');

let corCerta = '';
let pontos = 0;
let bloqueado = false;

function novaRodada(){
    mensagem.textContent = '';
    bolinhas.innerHTML = '';
    bloqueado = false;
    const coresMisturadas = [...cores].sort(() => 0.5 - Math.random()).slice(0, 6);
    const alvo = coresMisturadas[Math.floor(Math.random() * coresMisturadas.length)];
    corAlvo.textContent = alvo.nome;
    corCerta = alvo.valor;

    coresMisturadas.forEach(cor => {
        const bola = document.createElement('div');
        bola.classList.add('bolinha');
        bola.style.backgroundColor = cor.valor;
        bola.onclick = () =>{
            if(!bloqueado) verificarResposta(cor.valor);
        };
        bolinhas.appendChild(bola);
    });
}
function verificarResposta(corClicada){
    bloqueado = true;
    if(corClicada === corCerta){
        mensagem.textContent = '✅ Acertou!';
        mensagem.style.color = 'green';
        pontos++;
    } else{
        mensagem.textContent = '❌ Errou!';
        mensagem.style.color = 'red';
        pontos = Math.max(0, pontos - 1);
    }
    pontosEl.textContent = `Pontos: ${pontos}`;
    setTimeout(() =>{
        novaRodada();
    }, 1500)
}
novaRodada();