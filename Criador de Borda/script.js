const preview = document.getElementById("previewBox");
const colorInput = document.getElementById("borderColor");
const widthInput = document.getElementById("borderWidth");
const styleSelect = document.getElementById("borderStyle");
const radiusInput = document.getElementById("borderRadius");

function atualizarBorda(){
    const color = colorInput.value;
    const width = widthInput.value + "px";
    const style = styleSelect.value;
    const radius = radiusInput.value + "px";

    preview.style.border = `${width} ${style} ${color}`;
    preview.style.borderRadius = radius;
}

colorInput.addEventListener("input", atualizarBorda);
widthInput.addEventListener("input", atualizarBorda);
styleSelect.addEventListener("input", atualizarBorda);
radiusInput.addEventListener("input", atualizarBorda);

atualizarBorda();