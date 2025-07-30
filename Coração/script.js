const heart = document.getElementById("heart");
const toggleBtn = document.getElementById("toggleBtn");
const velocidadeSlider = document.getElementById("velocidade");
const intensidadeSlider = document.getElementById("intensidade");
const velocidadeValue = document.getElementById("velocidadeValue");
const intensidadeValue = document.getElementById("intensidadeValue");

let batendo = false;

function atualizarAnimacao(){
    const velocidade = parseFloat(velocidadeSlider.value);
    const intensidade = parseFloat(intensidadeSlider.value);

    heart.style.animationDuration = `${velocidade}s`;

    heart.style.setProperty('--intensidade', intensidade);
}
toggleBtn.addEventListener("click", ()=>{
    batendo = !batendo;
    heart.classList.toggle("bater", batendo);
    toggleBtn.textContent = batendo ? "Parar Batimento" : "Ativar Batimento";
    if(batendo){
        atualizarAnimacao();
    }
});
velocidadeSlider.addEventListener("input", () =>{
    const valor = parseFloat(velocidadeSlider.value);
    velocidadeValue.textContent = `${valor.toFixed(1)}s`;
    if(batendo){
        atualizarAnimacao();
    }
});

intensidadeSlider.addEventListener("input", () =>{
    const valor = parseFloat(intensidadeSlider.value);
    intensidadeValue.textContent = `${valor.toFixed(1)}x`;
    if(batendo){
        atualizarAnimacao();
    }
});

velocidadeValue.textContent = `${parseFloat(velocidadeSlider.value).toFixed(1)}s`;
intensidadeValue.textContent = `${parseFloat(intensidadeSlider.value).toFixed(1)}x`;