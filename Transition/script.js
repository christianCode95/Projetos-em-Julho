const box = document.getElementById('box');
const property = document.getElementById('property');
const duration = document.getElementById('duration');
const easing = document.getElementById('easing');
const toggleBtn = document.getElementById('toggle');
let toggled = false;

function updateTransition(){
    box.style.transitionProperty = property.value;
    box.style.transitionDuration = duration.value + 's';
    box.style.transitionTimingFunction = easing.value;
}
toggleBtn.addEventListener('click', () => {
    toggled = !toggled;
    if(toggled){
        if(property.value === 'width'){
            box.style.width = '200px';
        } else if(property.value === 'height'){
            box.style.height = '200px';
        } else if(property.value === 'background-color'){
            box.style.backgroundColor = 'mediumseagreen';
        } else if(property.value === 'opacity'){
            box.style.opacity = '0.3';
        } 
        else if(property.value === 'transform'){
            box.style.transform = 'rotate(45deg)';
        } else{
            box.style.width = '200px';
            box.style.height = '200px';
            box.style.backgroundColor = 'mediumseagreen';
            box.style.transform = 'rotate(45deg)';
            box.style.opacity = '0.3';
        }

    } else{
        box.style.width = '100px';
        box.style.height = '100px';
        box.style.backgroundColor = 'tomato';
        box.style.transform = 'none';
        box.style.opacity = '1';
    }
});
property.addEventListener('change', updateTransition);
duration.addEventListener('input', updateTransition);
easing.addEventListener('change', updateTransition);
updateTransition();
