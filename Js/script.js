let canvas = document.getElementById('meuCanvas');
let ctx = canvas.getContext('2d');

let img = new Image();
img.onload = function(){
  ctx.drawImage(img,0,0,canvas.clientWidth, canvas.height);
};
img.src = '../assets/normal.png'
