let tela = document.getElementById("tela");

/**
 * Reta
 */
let context = tela.getContext("2d");
context.moveTo(0, 0);
context.lineTo(250, 250);
context.stroke();

context.lineWidth = 5;
context.lineTo(500, 0);
context.strokeStyle = "#FF0000";
context.stroke();

/**
 * Retângulo
 */
//context.fillRect(200, 200, 100, 200);
//context.strokeRect(250, 0, 100, 200);
context.rect(10, 10, 100, 200);
context.fillStyle = "red";
context.strokeStyle = "#FF0000";
context.fill();
context.stroke();

/**
 * Limpar
 */
context.clearRect(20,20, 30, 30);

/**
 * Path
 */
context.beginPath();
context.lineWidth = 4;
context.strokeStyle = "yellow";
context.moveTo(100, 10);
context.lineTo(400, 400);
context.stroke();

context.beginPath();
context.lineWidth = 4;
context.strokeStyle = "blue";
context.fillStyle = "green";
context.moveTo(50, 10);
context.lineTo(300, 300);
context.lineTo(200, 300);
context.closePath();
context.fill();
context.stroke();

/**
 * Círculo
 */
let circle = {
  x: 250,
  y: 250,
  raio: 100,
  inicio: 0,
  fim: 0, 
  antHorario:  true,
}

function drawCircle(circle) {
  context.beginPath();
  context.strokeStyle = "blue";
  context.fillStyle = "green";
  context.arc(circle.x, circle.y, circle.raio, circle.inicio, circle.fim, circle.antHorario);
  context.fill();
  context.stroke();
}

/**
 * Animação
 */ 
setInterval(function () {
  context.beginPath();
  context.rect(0, 0, 500, 500);
  context.fillStyle = "cornflowerblue";
  context.fill();

  if (circle.fim <= 2 * Math.PI) {
    circle.fim += 0.2;
    circle.x += 1.4;
  }

  drawCircle(circle)
}, 100);

/**
 * Imagens
 */
let img = document.getElementById("img");
context.drawImage(img, 20, 20);

let img2 = new Image();
img2.src = "../images/thumbs-up.png";
img2.onload = desenharImg;

function desenharImg() {
  context.drawImage(img2, 200, 200, this.naturalWidth / 2, this.naturalHeight / 2);
}



