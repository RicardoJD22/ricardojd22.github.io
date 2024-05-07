let horaLaPaz = 12;
let minutoLaPaz = 0;
let segundoLaPaz = 0;

function updateHoraLaPaz() {
  let horaInput = TuHorario.value();
  let horaArray = horaInput.split(':');
  horaLaPaz = parseInt(horaArray[0]);
  minutoLaPaz = parseInt(horaArray[1]);
}

function draw() {
  segundoLaPaz++;

  if (segundoLaPaz === 60) {
    segundoLaPaz = 0;
    minutoLaPaz++;
    if (minutoLaPaz === 60) {
      minutoLaPaz = 0;
      horaLaPaz++;
      if (horaLaPaz === 12) {
        horaLaPaz = 0;
      }
    }
  }
  background('peru');
  TuHorario.value(`${horaLaPaz.toString().padStart(2, '0')}:${minutoLaPaz.toString().padStart(2, '0')}`);

  // LA PAZ
  drawClockG(150, height / 2, horaLaPaz, minutoLaPaz, segundoLaPaz, "La Paz");
  
  // CDMX
  let horaCDMX = (horaLaPaz - 1 + 24) % 24;
  drawClockG(400, height / 2, horaCDMX, minutoLaPaz, segundoLaPaz, "Ciudad de México");

  // BARCELONA
  let horaBarcelona = (horaLaPaz + 8 + 24) % 24;
  drawClockG(650, height / 2, horaBarcelona, minutoLaPaz, segundoLaPaz, "Barcelona");
}

function drawClockG(x, y, horas, minutos, segundos, title) {
  drawClock(x, y, horas, minutos, segundos);
  
  
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(title, x, y - 130);
}
