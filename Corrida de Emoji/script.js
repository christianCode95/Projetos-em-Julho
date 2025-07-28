// Seleciona os elementos HTML pelos seus IDs
const emoji1 = document.getElementById('emoji1'); // Tartaruga
const emoji2 = document.getElementById('emoji2'); // Coelho
const resultado = document.getElementById('resultado'); // Mensagem do vencedor da corrida
const resultadoAposta = document.getElementById('resultado-aposta'); // Mensagem se ganhou ou perdeu a aposta
const apostaAtual = document.getElementById('aposta-atual'); // Mostra a aposta atual feita pelo jogador
const btnCorrida = document.getElementById('btn-corrida'); // Botão para iniciar a corrida
const btnApostarTartaruga = document.getElementById('aposta-tartaruga'); // Botão para apostar na tartaruga
const btnApostarCoelho = document.getElementById('aposta-coelho'); // Botão para apostar no coelho

// Variáveis de controle
let pos1 = 0; // Posição atual da tartaruga
let pos2 = 0; // Posição atual do coelho
let corridaAtiva = false; // Indica se a corrida está em andamento
let apostaEscolhida = null; // Guarda qual emoji foi apostado pelo jogador

// Função chamada quando o jogador faz uma aposta
function fazerAposta(emoji) {
    // Se a corrida já começou, não permite fazer aposta
    if (corridaAtiva) return;

    // Guarda qual emoji o jogador escolheu (emoji1 ou emoji2)
    apostaEscolhida = emoji;

    // Remove destaque anterior dos botões de aposta
    btnApostarTartaruga.classList.remove('selecionado');
    btnApostarCoelho.classList.remove('selecionado');

    // Destaca o botão selecionado e mostra mensagem da aposta
    if (emoji === 'emoji1') {
        btnApostarTartaruga.classList.add('selecionado');
        apostaAtual.textContent = '🎯 Você apostou na Tartaruga! 🐢';
    } else {
        btnApostarCoelho.classList.add('selecionado');
        apostaAtual.textContent = '🎯 Você apostou no Coelho! 🐇';
    }

    // Habilita o botão de corrida
    btnCorrida.disabled = false;

    // Limpa mensagens anteriores
    resultado.textContent = '';
    resultadoAposta.textContent = '';
}

// Função chamada ao iniciar a corrida
function comecarCorrida() {
    // Impede iniciar corrida se já estiver em andamento ou sem aposta
    if (corridaAtiva || !apostaEscolhida) return;

    corridaAtiva = true; // Marca que a corrida está ativa
    pos1 = 0; // Reseta posição da tartaruga
    pos2 = 0; // Reseta posição do coelho
    emoji1.style.left = '0px'; // Reinicia a posição visual da tartaruga
    emoji2.style.left = '0px'; // Reinicia a posição visual do coelho
    resultado.textContent = ''; // Limpa mensagens
    resultadoAposta.textContent = '';

    // Desativa botões para impedir apostas durante a corrida
    btnCorrida.disabled = true;
    btnApostarTartaruga.disabled = true;
    btnApostarCoelho.disabled = true;

    // Inicia a corrida com atualizações a cada 100ms
    const intervalo = setInterval(() => {
        // Move os emojis aleatoriamente (de 2 a 10 pixels por vez)
        pos1 += Math.random() * 8 + 2;
        pos2 += Math.random() * 8 + 2;

        // Atualiza a posição dos emojis na tela
        emoji1.style.left = `${pos1}px`;
        emoji2.style.left = `${pos2}px`;

        // Verifica se algum dos emojis chegou ao final da pista (700px)
        if (pos1 >= 700 || pos2 >= 700) {
            clearInterval(intervalo); // Para a corrida
            corridaAtiva = false;

            // Define quem venceu com base na posição
            const vencedor = pos1 >= 700 && pos1 > pos2 ? 'emoji1' : 'emoji2';

            // Verifica se a aposta do jogador foi vencedora
            const ganhou = apostaEscolhida === vencedor;

            // Mostra quem venceu a corrida
            if (vencedor === 'emoji1') {
                resultado.textContent = '🏆 🐢 Tartaruga venceu a corrida! 🏆';
            } else {
                resultado.textContent = '🏆 🐇 Coelho venceu a corrida! 🏆';
            }

            // Após um curto tempo, mostra o resultado da aposta
            setTimeout(() => {
                if (ganhou) {
                    resultadoAposta.textContent = '🎉 PARABÉNS! Você ganhou a aposta!';
                    resultadoAposta.className = 'ganhou'; // Aplica classe para estilização
                } else {
                    resultadoAposta.textContent = '😔 Que pena! Você perdeu a aposta. Tente novamente!';
                    resultadoAposta.className = 'perdeu'; // Aplica classe para estilização
                }

                // Reativa os botões de aposta
                btnApostarTartaruga.disabled = false;
                btnApostarCoelho.disabled = false;

                // Após alguns segundos, limpa tudo para uma nova rodada
                setTimeout(() => {
                    btnApostarTartaruga.classList.remove('selecionado');
                    btnApostarCoelho.classList.remove('selecionado');
                    apostaEscolhida = null;
                    apostaAtual.textContent = '';
                    btnCorrida.disabled = true;
                }, 3000); // Espera 3 segundos antes de limpar tudo
            }, 1000); // Espera 1 segundo antes de mostrar o resultado da aposta
        }
    }, 100); // Intervalo de 100ms entre cada movimento dos emojis
}