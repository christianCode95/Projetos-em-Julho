const mapa = document.getElementById("mapa");
const limpar = document.getElementById("limpar");
const toggleTheme = document.getElementById("toggleTheme");
const pontos = [];

mapa.addEventListener("click", (e) =>{
    const x = e.clientX;
    const y = e.clientY;

    let pontoProximo = pontos.find(p =>{
        const dx = p.x - x;
        const dy = p.y - y;
        return Math.sqrt(dx * dx + dy * dy) < 20;
    });
    if(pontoProximo){
        pontoProximo.intensidade++;
        const novoTamanho = 20 + pontoProximo.intensidade * 5;
        pontoProximo.el.style.width = `${novoTamanho}px`;
        pontoProximo.el.style.height = `${novoTamanho}px`;
        pontoProximo.el.style.left = `${pontoProximo.x - novoTamanho / 2}px`;
        pontoProximo.el.style.top = `${pontoProximo.y - novoTamanho / 2}px`;
        pontoProximo.el.style.background = `rgba(255,0,0,${Math.min(0.3 + 0.1 * pontoProximo.intensidade, 1)})`;
    } else{
        const ponto = document.createElement("div");
        ponto.classList.add("ponto");
        ponto.style.left = `${x - 10}px`;
        ponto.style.top = `${y - 10}px`;
        mapa.appendChild(ponto);
        pontos.push({x,y,el:ponto,intensidade: 1});
    }
});
limpar.addEventListener("click", () =>{
    mapa.innerHTML = "";
    pontos.length = 0;
});
toggleTheme.addEventListener("click", () =>{
    document.body.classList.toggle("dark");
    toggleTheme.textContent = document.body.classList.contains("dark")? "☀️" : "🌙";
});