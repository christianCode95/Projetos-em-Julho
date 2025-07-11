let saldo = 0;

function depositar(){
    const valor = parseFloat(document.getElementById("valor").value);
    if(isNaN(valor) || valor <= 0){
        mostrarMensagem("Valor inválido para depósito.");
        return;
    }
    saldo += valor;
    mostrarMensagem(`+ R$ ${valor.toFixed(2)} depositado`);
    limparCampo();
}

function sacar(){
    const valor = parseFloat(document.getElementById("valor").value);
    if(isNaN(valor) || valor <= 0){
        mostrarMensagem("Valor inválido para saque.");
        return;
    }
    if(valor > saldo){
        mostrarMensagem("Saldo insuficiente");
        return;
    }
    saldo -= valor;
    mostrarMensagem(`- R$ ${valor.toFixed(2)} sacado`);
    limparCampo();
}

function mostrarSaldo(){
    mostrarMensagem(`Saldo: R$ ${saldo.toFixed(2)}`);
}

function limpar(){
    limparCampo();
    mostrarMensagem("");
}

function mostrarMensagem(msg){
    document.getElementById("mensagem").textContent = msg;
}

function limparCampo(){
    document.getElementById("valor").value = "";
}