const box = document.getElementById('box');
const animationName = document.getElementById('animationName');
const animationDuration = document.getElementById('animationDuration');
const animationTimingFunction = document.getElementById('animationTimingFunction');

function updateAnimation(){
    box.style.animationName = animationName.value;
    box.style.animationDuration = animationDuration.value + 's';
    box.style.animationTimingFunction = animationTimingFunction.value;
    box.style.animationIterationCount = 'infinite';
}
animationName.addEventListener('change', updateAnimation);
animationDuration.addEventListener('input', updateAnimation);
animationTimingFunction.addEventListener('change', updateAnimation);

updateAnimation();