let TuHorario;
let TitleClock;
//ESTRUCTURA DE BUSCADOR DE RELOJ
function setup() {
    createCanvas(800, 400);
    background(255, 255, 255, 70);
    angleMode(DEGREES);

    
    TuHorario = createInput('00:00', 'time');
    TuHorario.position(615, 80);
    TuHorario.input(updateHoraLaPaz);
    frameRate(1);

}


