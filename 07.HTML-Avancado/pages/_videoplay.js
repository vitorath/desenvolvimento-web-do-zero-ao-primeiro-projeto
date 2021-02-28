let video = document.getElementById("video");
let controle = document.getElementById("controle");

function retroceder() {
  video.currentTime -= 15;
}

function avancar() {
  video.currentTime += 15;
}

function diminuirVelocidade() {
  video.playbackRate -= 0.1;
}

function aumentarVelocidade() {
  video.playbackRate += 0.1;
}

function play() {
  video.play();
}

function stop() {
  video.pause();
  video.currentTime = 0;
}

function mostrarControle() {
  controle.style.display = 'block';
}

function ocultarControle() {
  controle.style.display = 'none';
}