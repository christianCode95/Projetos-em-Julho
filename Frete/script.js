document.getElementById('calcular').addEventListener('click', ()=>{
    const distancia = parseFloat(document.getElementById('distancia').value);
    const tipo = document.getElementById('tipo').value;
    const resultado = document.getElementById('resultado');
    if(isNaN(distancia) || distancia <= 0){
        resultado.textContent = 'Informe uma distância válida';
        return;
    }
    const precosPorKm = {
        economica: 0.5,
        normal: 0.75,
        expressa: 1.2
    };
    const preco = (distancia * precosPorKm[tipo]).toFixed(2);
    resultado.textContent = `Valor estimado: R$ ${preco}`;
});