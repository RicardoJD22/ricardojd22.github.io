const CLOCK_RADIUS = 100;
const HOUR_HAND_LENGTH = 50;
const MINUTE_HAND_LENGTH = 80;
const SECOND_HAND_LENGTH = 90;
const HOUR_HAND_THICKNESS = 4;
const MINUTE_HAND_THICKNESS = 2;
const SECOND_HAND_THICKNESS = 1;


function drawCircle(xCenter, yCenter, radius) {
  let x = radius;
  let y = 0;
  let err = 0;

  while (x >= y) {
      plotPoints(xCenter, yCenter, x, y);
      
      if (err <= 0) {
          y++;
          err += 2 * y + 1;
      }
      
      if (err > 0) {
          x--;
          err -= 2 * x + 1;
      }
  }
}
//ECUACIÓN PUNTO Y MEDIO PARA CIRCULOS
function plotPoints(xCenter, yCenter, x, y) {
  
  point(xCenter + x, yCenter + y);
  point(xCenter - x, yCenter + y);
  point(xCenter + x, yCenter - y);
  point(xCenter - x, yCenter - y);
  point(xCenter + y, yCenter + x);
  point(xCenter - y, yCenter + x);
  point(xCenter + y, yCenter - x);
  point(xCenter - y, yCenter - x);
}

// ALGORITMO ECUACIÓN PUNTO-PENDIENTE - LA PAZ 

function drawHand(length, angle, thickness, color) {
    stroke(color);
    strokeWeight(thickness);
    let x = length * cos(angle);
    let y = length * sin(angle);
    let m = y / x; 
    let b = 0; 
  
    
    if (abs(x) >= abs(y)) {
        let startX, endX;
        if (x >= 0) {
            startX = 0;
            endX = x;
        } else {
            startX = x;
            endX = 0;
        }
        for (let i = startX; i <= endX; i++) {
            let xPoint = i;
            let yPoint = round(m * i + b);
            point(xPoint, yPoint);
        }
    } else { 
        let startY, endY;
        if (y >= 0) {
            startY = 0;
            endY = y;
        } else {
            startY = y;
            endY = 0;
        }
        for (let i = startY; i <= endY; i++) {
            let yPoint = i;
            let xPoint = round((yPoint - b) / m);
            point(xPoint, yPoint);
        }
    }
  }

//ALGORITMO DDA - CIUDAD DE MEXICO
function drawDDA(xCenter, yCenter, radius) {
    let x = radius;
    let y = 0;
    let dx = 1;
    let dy = 1;
    let err = dx - (radius << 1);

    while (x >= y) {
        plotPoints(xCenter, yCenter, x, y);
        if (err <= 0) {
            y++;
            err += dy;
            dy += 2;
        }
        if (err > 0) {
            x--;
            dx += 2;
            err += dx - (radius << 1);
        }
    }
}

// ALGORITMO DE BRESENHAM - BARCELONA
function drawBresenham(xCenter, yCenter, radius) {
    let x = 0;
    let y = radius;
    let d = 3 - 2 * radius;

    while (x <= y) {
        plotPoints(xCenter, yCenter, x, y);
        if (d < 0) {
            d = d + (4 * x) + 6;
        } else {
            d = d + 4 * (x - y) + 10;
            y--;
        }
        x++;
    }
}

//DIBUJA Y LLAMA A LA FUNCIÓN CON LOS ALGORITMOS
function drawClock(x, y, hora, minuto, segundo) {
 
    strokeWeight(2);
    drawCircle(x, y, CLOCK_RADIUS);

    push();
    translate(x, y);
    rotate(-90);

    let anguloHora = map(hora * 60, 0, 12 * 60, 0, 360);
    drawHand(HOUR_HAND_LENGTH, anguloHora, HOUR_HAND_THICKNESS, color("black"));

    
    let anguloMinuto = map(minuto * 60, 0, 60 * 60, 0, 360);
    drawHand(MINUTE_HAND_LENGTH, anguloMinuto, MINUTE_HAND_THICKNESS, color("black"));

    
    drawHand(SECOND_HAND_LENGTH, map(segundo, 0, 60, 0, 360), SECOND_HAND_THICKNESS, color("red"));

    
    drawDDA(x + 150, y, CLOCK_RADIUS);

    drawBresenham(x + 300, y, CLOCK_RADIUS);
    
    pop();

    

    
}
