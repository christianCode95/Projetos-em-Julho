const container = document.getElementById('container');
const flexDirection = document.getElementById('flexDirection');
const justifyContent = document.getElementById('justifyContent');
const alignItems = document.getElementById('alignItems');

function updateFlex() {
    container.style.flexDirection = flexDirection.value;
    container.style.justifyContent = justifyContent.value;
    container.style.alignItems = alignItems.value;
}
flexDirection.addEventListener('change', updateFlex);
justifyContent.addEventListener('change', updateFlex);
alignItems.addEventListener('change', updateFlex);

updateFlex();