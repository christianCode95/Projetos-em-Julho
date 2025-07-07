const preview = document.getElementById('previewBox');
const output = document.getElementById('cssOutput');
const inputs = {
    color: document.getElementById('shadowColor'),
    offsetX: document.getElementById('offsetX'),
    offsetY: document.getElementById('offsetY'),
    blur: document.getElementById('blur'),
    spread: document.getElementById('spread')
};

function atualizarBoxShadow(){
    const x = inputs.offsetX.value + 'px';
    const y = inputs.offsetY.value + 'px';
    const blur = inputs.blur.value + 'px';
    const spread = inputs.spread.value + 'px';
    const color = inputs.color.value;
    const shadow = `${x} ${y} ${blur} ${spread} ${color}`;
    preview.style.boxShadow = shadow;
    output.textContent = `box-shadow: ${shadow};`;
}
Object.values(inputs).forEach(input => {
    input.addEventListener('input', atualizarBoxShadow);
});
atualizarBoxShadow();