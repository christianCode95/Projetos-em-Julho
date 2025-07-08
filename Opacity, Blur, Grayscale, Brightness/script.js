const box = document.getElementById("box");
const opacity = document.getElementById("opacity");
const opacityVal = document.getElementById("opacityVal");
const blur = document.getElementById("blur");
const blurVal = document.getElementById("blurVal");
const grayscale = document.getElementById("grayscale");
const grayscaleVal = document.getElementById("grayscaleVal");
const brightness = document.getElementById("brightness");
const brightnessVal = document.getElementById("brightnessVal");

function updateFilters(){
    opacityVal.textContent = opacity.value;
    blurVal.textContent = blur.value;
    grayscaleVal.textContent = grayscale.value;
    brightnessVal.textContent = brightness.value;

    box.style.opacity = opacity.value;
    box.style.filter = `blur(${blur.value}px) grayscale(${grayscale.value}%) brightness(${brightness.value}%)`;
}

opacity.addEventListener("input", updateFilters);
blur.addEventListener("input", updateFilters);
grayscale.addEventListener("input", updateFilters);
brightness.addEventListener("input", updateFilters);

updateFilters();