const canvas = document.getElementById('assinatura');
const ctx = canvas.getContext('2d');
let desenhando = false;

canvas.addEventListener('mousedown', ()=> {
    desenhando = true;
    ctx.beginPath();
});
canvas.addEventListener('mouseup', ()=> {
    desenhando = false;
});
canvas.addEventListener('mouseleave' , ()=> {
    desenhando = false;
});
canvas.addEventListener('mousemove', (e)=> {
    if(!desenhando) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
});

function limparCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}