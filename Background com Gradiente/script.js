const preview = document.getElementById('previewBox');
const output = document.getElementById('cssOutput');

const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const direction = document.getElementById('direction');

function atualizarGradiente(){
    const dir = direction.value;
    const c1 = color1.value;
    const c2 = color2.value;
    const gradiente = `linear-gradient(${dir}, ${c1}, ${c2})`;
    preview.style.background = gradiente;
    output.textContent = `background: ${gradiente};`;
}
color1.addEventListener('input', atualizarGradiente);
color2.addEventListener('input', atualizarGradiente);
direction.addEventListener('input', atualizarGradiente);

atualizarGradiente();