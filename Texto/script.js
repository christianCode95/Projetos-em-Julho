function formatar(comando) {
  document.execCommand(comando, false, null);
}
function salvarTexto() {
  const conteudo = document.getElementById("editor").innerHTML;
  localStorage.setItem("textoSalvo", conteudo);
  alert("Texto salvo com sucesso!");
}
function carregarTexto() {
  const conteudo = localStorage.getItem("textoSalvo");
  if (conteudo) {
    document.getElementById("editor").innerHTML = conteudo;
  } else {
    alert("Nenhum texto salvo encontrado.");
  }
}
function limparTexto() {
  if (confirm("Deseja limpar o conteúdo?")) {
    document.getElementById("editor").innerHTML = "";
  }
}
