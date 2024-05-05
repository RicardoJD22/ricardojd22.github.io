const CLOCK_RADIUS = 200;
const HOUR_HAND_LENGTH = 50;
const MINUTE_HAND_LENGTH = 80;
const SECOND_HAND_LENGTH = 90;
const HOUR_HAND_THICKNESS = 4;
const MINUTE_HAND_THICKNESS = 2;
const SECOND_HAND_THICKNESS = 1;

function drawClock(x, y, hora, minuto, segundo) {
  //ESTRUCTURA DEL RELOJ
    strokeWeight(2);
    ellipse(x, y, CLOCK_RADIUS, CLOCK_RADIUS);

    push();
    translate(x, y);
    rotate(-90);

    // HORA
    let anguloHora = map(hora * 60, 0, 12 * 60, 0, 360);
    drawHand(HOUR_HAND_LENGTH, anguloHora, HOUR_HAND_THICKNESS, color("black"));

    // MINUTO
    let anguloMinuto = map(minuto * 60, 0, 60 * 60, 0, 360);
    drawHand(MINUTE_HAND_LENGTH, anguloMinuto, MINUTE_HAND_THICKNESS, color("black"));

    // SEGUNDO
    drawHand(SECOND_HAND_LENGTH, map(segundo, 0, 60, 0, 360), SECOND_HAND_THICKNESS, color("red"));

    pop();

    
}


function drawHand(length, angle, thickness, color) {
    stroke(color);
    strokeWeight(thickness);
    line(0, 0, length * cos(angle), length * sin(angle));
}