function alternarLuz(id, interruptor) {
  const luz = document.getElementById(id);
  luz.classList.toggle("acesa");
  interruptor.classList.toggle("ativo");
}
