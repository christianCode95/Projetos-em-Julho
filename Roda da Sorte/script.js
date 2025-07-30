const roleta = document.getElementById("roleta");
const resultado = document.getElementById("resultado");
const btn = document.getElementById("girar");
const premios = [
    "1 Ano de Café Grátis",
    "Viagem para o Japão",
    "Vale-Pizza",
    "Nada...😅",
    "R$ 10.000 em Bitcoin",
    "Abraço Virtual 🤗"
]
let girando = false;
btn.addEventListener("click", () =>{
    if(girando) return;
    girando = true;
    resultado.textContent = "";
    const numPremios = premios.length;
    const grausPorSetor = 360 / numPremios;
    const anguloAleatorio = Math.random() * 360;
    const voltasCompletas = 360 * 5;
    const anguloFinal = voltasCompletas + anguloAleatorio;
    roleta.style.transform = `rotate(${anguloFinal}deg)`;
    setTimeout(() =>{
        const anguloDeParada = anguloFinal % 360;
        const anguloNormalizado = (360 - anguloDeParada) % 360;
        const indiceVencedor = Math.floor(anguloNormalizado / grausPorSetor);
        const premioVencedor = premios[indiceVencedor];
        console.log(`Ângulo de parada: ${anguloDeParada.toFixed(2)}°, Ângulo Normalizado: ${anguloNormalizado.toFixed(2)}°, indice: ${indiceVencedor}`);
        resultado.textContent = `🎉 Você ganhou: ${premioVencedor}!`;
        girando = false;
    },4000)
})