function calcularDias() {
  const dataNascimentoString = document.getElementById("dataNascimento").value;
  if (!dataNascimentoString) {
    alert("Por favor, selecione sua data de nascimento");
    return;
  }
const hoje = new Date();
const nascimento = new Date(dataNascimentoString);

nascimento.setMinutes(nascimento.getMinutes() + nascimento.getTimezoneOffset());
if (nascimento > hoje) {
  alert("A data de nascimento não pode ser no futuro!");
  document.getElementById("anos").innerText = "-";
  document.getElementById("meses").innerText = "-";
  document.getElementById("dias").innerText = "-";
  return;
}
let anos = hoje.getFullYear() - nascimento.getFullYear();
let meses = hoje.getMonth() - nascimento.getMonth();
let dias = hoje.getDate() - nascimento.getDate();
if (dias < 0) {
  meses--;

  dias += new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
}
if (meses < 0) {
  anos--;
  meses += 12;
}
document.getElementById("anos").innerText = anos;
document.getElementById("meses").innerText = meses;
document.getElementById("dias").innerText = dias;

}