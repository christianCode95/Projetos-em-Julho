const box = document.getElementById('box');
const syncAll = document.getElementById('syncAll');
const margins = ['Top', 'Right', 'Bottom', 'Left'];
const paddings = ['Top', 'Right', 'Bottom', 'Left'];

function updateValue(type, side){
    const input = document.getElementById(type +side);
    const span = document.getElementById(type + side + 'Val');
    span.textContent = input.value;

    if(type === 'margin') {
        box.style['margin' + side] = input.value + 'px';
    } else if(type === 'padding') {
        box.style['padding' + side] = input.value + 'px';
    }
}
function syncValues(type,value){
    ['Top', 'Right', 'Bottom', 'Left'].forEach(side => {
        const input = document.getElementById(type + side);
        const span = document.getElementById(type + side + 'Val');
        input.value = value;
        if(type === 'margin') {
            box.style['margin' + side] = value + 'px';
        }
        else{
            box.style['padding' + side] = value + 'px';
        }
    });
}
margins.forEach(side => {
    const input = document.getElementById('margin' + side);
    input.addEventListener('input', () => {
        if(syncAll.checked) {
            syncValues('margin', input.value);
        } else{
             updateValue('margin', side);
        }
    });
});
paddings.forEach(side => {
    const input = document.getElementById('padding' + side);
    input.addEventListener('input', () => {
        if(syncAll.checked) {
            syncValues('padding', input.value);
        } else{
             updateValue('padding', side);
        }
    });
});
syncAll.addEventListener('change', () => {
    if(syncAll.checked) {
        syncValues('margin', document.getElementById('marginTop').value);
        syncValues('padding', document.getElementById('paddingTop').value);
    }
});
syncValues('margin', document.getElementById('marginTop').value);
syncValues('padding', document.getElementById('paddingTop').value);