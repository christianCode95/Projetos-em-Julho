const box = document.getElementById("box");
const rotate = document.getElementById("rotate");
const rotateVal = document.getElementById("rotateVal");
const scale = document.getElementById("scale");
const scaleVal = document.getElementById("scaleVal");
const translateX = document.getElementById("translateX");
const translateXVal = document.getElementById("translateXVal");
const translateY = document.getElementById("translateY");
const translateYVal = document.getElementById("translateYVal");

function updateTransform(){
    const r = rotate.value;
    const s = scale.value / 100;
    const tx = translateX.value;
    const ty = translateY.value;

    rotateVal.textContent = r;
    scaleVal.textContent = s.toFixed(2);
    translateXVal.textContent = tx;
    translateYVal.textContent = ty;

    box.style.transform = `rotate(${r}deg)scale(${s}) translate(${tx}px, ${ty}px)`;
}

rotate.addEventListener("input", updateTransform);
scale.addEventListener("input", updateTransform);
translateX.addEventListener("input", updateTransform);
translateY.addEventListener("input", updateTransform);

updateTransform();