const texto = document.getElementById("texto");
const fontFamily = document.getElementById("fontFamily");
const fontSize = document.getElementById("fontSize");
const fontWeight = document.getElementById("fontWeight");
const fontStyle = document.getElementById("fontStyle");

function updateFont(){
    texto.style.fontFamily = fontFamily.value;
    texto.style.fontSize = fontSize.value + 'px';
    texto.style.fontWeight = fontWeight.checked ? 'bold' : 'normal';
    texto.style.fontStyle = fontStyle.checked ? 'italic' : 'normal';
}
fontFamily.addEventListener('change', updateFont);
fontSize.addEventListener('input', updateFont);
fontWeight.addEventListener('change', updateFont);
fontStyle.addEventListener('change', updateFont);

updateFont();