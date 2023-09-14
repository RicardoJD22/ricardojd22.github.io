//JUEGO DE LABERINTO CREADO POR RICARDO GIBERT TOLEDO
//PROGRAMACIÓN AVANZADA DE INTERNET

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var  dir = 0, speed = 10;
let score = 0;
let walls = [];
let pause = false;
let rules = false;
let enter = true;
var image = new Image();
var image2 = new Image();
var fondoImg = new Image();
var pauseImg = new Image();
var rulesImg = new Image();
var image3 = new Image();
var audio = new Audio();
var audio2 = new Audio();
var colect = new Audio();
//var winImg = new Image();
var imagenFondo = new Image();
var inicioFondo = new Image();
let cronometro;
let isRunning = false;
let segundos = 0;
let minutos = 0;
var tiempoTotal = 0; 
var tiempoRestante = tiempoTotal; 
var intervalo = 1000; 

audio.src="song.mp3";
//winImg.src="win.png";
colect.src="coleccion.mp3";
audio2.src="finish.mp3";
fondoImg.src="PARK.jpeg";
rulesImg.src="Pause.jpg";
image.src="Mamado.png";
image3.src="soda.png"
image2.src="rigby.png";
pauseImg.src="win.png";
imagenFondo.src = 'Espacio.jpg';
inicioFondo.src ='inicio.jpg';

class Cuadrado{

    constructor(x,y,w,h,c){
         this.x = x;
         this.y = y;
         this.w = w;
         this.h = h;
         this.c = c;
    }

    paint(ctx){

          ctx.fillStyle = this.c;
          ctx.fillRect(this.x,this.y,this.w,this.h);
          ctx.strokeRect(this.x,this.y,this.w,this.h);

    }

    seTocan(otro){
        if(this.x < otro.x + otro.w &&  
           this.x + this.w > otro.x &&  
           this.y < otro.y + otro.h &&   
           this.y + this.h > otro.y  ) 
        { 
            return true;   
        }
            return false;
    }

}
//JUGADOR
const player = new Cuadrado(20,40,50,50,"black"); 

//SALIDAS
const target = new Cuadrado(1200, 1000,40,40,"black");
const target2 = new Cuadrado(200, 1000,40,40,"black");

//SODAS
const object = new Cuadrado(200, 300,40,40,"black");
const object2 = new Cuadrado(200, 300,40,40,"black");
const object3 = new Cuadrado(200, 300,40,40,"black");
const object4 = new Cuadrado(200, 300,40,40,"black");
const object5 = new Cuadrado(200, 300,40,40,"black");
const object6 = new Cuadrado(200, 300,40,40,"black");
const object7 = new Cuadrado(200, 300,40,40,"black");
const object8 = new Cuadrado(200, 300,40,40,"black");
const object9 = new Cuadrado(200, 300,40,40,"black");
const object10 = new Cuadrado(200, 300,40,40,"black");
const object11 = new Cuadrado(200, 300,40,40,"black");
const object12 = new Cuadrado(200, 300,40,40,"black");
const object13 = new Cuadrado(200, 300,40,40,"black");
const object14 = new Cuadrado(200, 300,40,40,"black");
const object15 = new Cuadrado(200, 300,40,40,"black");




//BORDES 
walls.push( new Cuadrado(-10,30,1650,5,"BLACK") )
walls.push( new Cuadrado(0,30,5,1100,"BLACK") )
walls.push( new Cuadrado(0,1095,1450,6,"BLACK") )
walls.push( new Cuadrado(1550,1095,450,6,"BLACK") )
walls.push( new Cuadrado(1640,0,5,1100,"BLACK") )
//walls.push( new Cuadrado(0,1090,1400,5,"BLACK") )

//ESTRUCTURA DE LABERINTO (SUPERIOR)
walls.push( new Cuadrado(350,30,15,140,"BlACK") )
walls.push( new Cuadrado(180,160,480,15,"BLACK") )
walls.push( new Cuadrado(40,160,60,15,"BLACK") )
walls.push( new Cuadrado(180,230,120,15,"BLACK") )
walls.push( new Cuadrado(90,105,15,200,"BLACK") )
walls.push( new Cuadrado(30,305,15,390,"BLACK") )
walls.push( new Cuadrado(0,695,200,15,"BLACK") )
walls.push( new Cuadrado(90,300,340,15,"BLACK") )
walls.push( new Cuadrado(180,160,15,80,"BLACK") )
walls.push( new Cuadrado(0,90,215,15,"BLACK") )
walls.push( new Cuadrado(650,90,215,15,"BLACK") )
walls.push( new Cuadrado(820,90,15,140,"BLACK") )
walls.push( new Cuadrado(580,160,15,70,"BLACK") )
walls.push( new Cuadrado(450,95,65,15,"BLACK") )
walls.push( new Cuadrado(415,240,15,70,"BLACK") )
walls.push( new Cuadrado(500,35,15,70,"BLACK") )
walls.push( new Cuadrado(510,240,15,70,"BLACK") )
walls.push( new Cuadrado(670,240,15,70,"BLACK") )
walls.push( new Cuadrado(820,230,15,85,"BLACK") )
walls.push( new Cuadrado(970,30,15,350,"BLACK") )
walls.push( new Cuadrado(1068,110,15,185,"BLACK") )
walls.push( new Cuadrado(1068,180,185,15,"BLACK") )
walls.push( new Cuadrado(1420,330,105,15,"BLACK") )
walls.push( new Cuadrado(1420,540,225,15,"BLACK") )
walls.push( new Cuadrado(1240,450,80,15,"BLACK") )
walls.push( new Cuadrado(1510,330,15,120,"BLACK") )
walls.push( new Cuadrado(1320,100,15,550,"BLACK") )
walls.push( new Cuadrado(1510,100,15,155,"BLACK") )
walls.push( new Cuadrado(1420,200,15,350,"BLACK") )
walls.push( new Cuadrado(1068,100,450,15,"BLACK") )
walls.push( new Cuadrado(750,300,15,90,"BLACK") )
walls.push( new Cuadrado(875,390,15,90,"BLACK") )
walls.push( new Cuadrado(510,375,380,15,"BLACK") )
walls.push( new Cuadrado(875,475,280,15,"BLACK") )
walls.push( new Cuadrado(1140,260,15,400,"BLACK") )
walls.push( new Cuadrado(1140,260,110,15,"BLACK") )
walls.push( new Cuadrado(1235,260,15,110,"BLACK") )
walls.push( new Cuadrado(900,175,80,15,"BLACK") )
walls.push( new Cuadrado(745,160,15,70,"BLACK") )
walls.push( new Cuadrado(1150,580,80,15,"BLACK") )
walls.push( new Cuadrado(745,220,90,15,"BLACK") )
walls.push( new Cuadrado(415,240,110,15,"BLACK") )
walls.push( new Cuadrado(510,300,255,15,"BLACK") )

//ESTRUCTURA DE LABERINTO (INFERIOR)
walls.push( new Cuadrado(1525,750,120,15,"BLACK") )
walls.push( new Cuadrado(1320,650,230,15,"BLACK") )
walls.push( new Cuadrado(1415,660,15,200,"BLACK") )
walls.push( new Cuadrado(400,735,1030,15,"BLACK") )
walls.push( new Cuadrado(1415,850,130,15,"BLACK") )
walls.push( new Cuadrado(510,390,15,100,"BLACK") )
walls.push( new Cuadrado(295,390,15,100,"BLACK") )
walls.push( new Cuadrado(295,380,120,15,"BLACK") )
walls.push( new Cuadrado(650,640,15,100,"BLACK") )
walls.push( new Cuadrado(875,490,15,100,"BLACK") )
walls.push( new Cuadrado(780,590,220,15,"BLACK") )
walls.push( new Cuadrado(400,380,15,370,"BLACK") )
walls.push( new Cuadrado(670,390,15,100,"BLACK") )
walls.push( new Cuadrado(510,390,15,100,"BLACK") )
walls.push( new Cuadrado(650,750,15,100,"BLACK") )
walls.push( new Cuadrado(650,835,250,15,"BLACK") )
walls.push( new Cuadrado(200,305,15,290,"BLACK") )
walls.push( new Cuadrado(100,475,100,15,"BLACK") )
walls.push( new Cuadrado(200,580,100,15,"BLACK") )
walls.push( new Cuadrado(550,820,15,110,"BLACK") )
walls.push( new Cuadrado(985,830,15,100,"BLACK") )
walls.push( new Cuadrado(550,930,450,15,"BLACK") )
walls.push( new Cuadrado(510,600,15,150,"BLACK") )
walls.push( new Cuadrado(990,830,330,15,"BLACK") )
walls.push( new Cuadrado(1020,680,15,60,"BLACK") )
walls.push( new Cuadrado(1000,1130,530,15,"BLACK") )
walls.push( new Cuadrado(510,590,70,15,"BLACK") )
walls.push( new Cuadrado(870,680,15,70,"BLACK") )
walls.push( new Cuadrado(1310,830,15,200,"BLACK") )
walls.push( new Cuadrado(1450,1015,15,85,"BLACK") )
walls.push( new Cuadrado(1550,1015,15,85,"BLACK") )
walls.push( new Cuadrado(1550,1015,95,15,"BLACK") )
walls.push( new Cuadrado(1510,250,135,15,"BLACK") )
walls.push( new Cuadrado(1310,1015,150,15,"BLACK") )
walls.push( new Cuadrado(1310,935,230,15,"BLACK") )
walls.push( new Cuadrado(200,820,350,15,"BLACK") )
walls.push( new Cuadrado(285,580,15,180,"BLACK") )
walls.push( new Cuadrado(110,900,360,15,"BLACK") )
walls.push( new Cuadrado(110,770,15,140,"BLACK") )
walls.push( new Cuadrado(375,1005,15,80,"BLACK") )
walls.push( new Cuadrado(510,1005,15,80,"BLACK") )
walls.push( new Cuadrado(375,1075,150,15,"BLACK") )
walls.push( new Cuadrado(190,1005,15,90,"BLACK") )
walls.push( new Cuadrado(100,985,15,110,"BLACK") )
walls.push( new Cuadrado(190,1005,200,15,"BLACK") )
walls.push( new Cuadrado(190,785,15,50,"BLACK") )
walls.push( new Cuadrado(465,1000,220,15,"BLACK") )
walls.push( new Cuadrado(670,1000,15,90,"BLACK") )
walls.push( new Cuadrado(755,1000,15,90,"BLACK") )
walls.push( new Cuadrado(755,1000,300,15,"BLACK") )
walls.push( new Cuadrado(670,1075,90,15,"BLACK") )
walls.push( new Cuadrado(466,900,15,100,"BLACK") )
walls.push( new Cuadrado(1050,910,15,105,"BLACK") )
walls.push( new Cuadrado(0,985,100,15,"BLACK") )
walls.push( new Cuadrado(1225,910,15,120,"BLACK") )
walls.push( new Cuadrado(1225,1015,120,15,"BLACK") )
walls.push( new Cuadrado(1050,910,190,15,"BLACK") )


window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 17);
        };
}());

document.addEventListener("keydown", (e) =>{
//MANDOS
    if (!pause) {
        switch(e.keyCode){ 
            case 87:
                dir = 1;
            break;
            case 83:
                dir = 2;
            break;
            case 68:
                dir = 3;
            break; 
            case 65:
                dir = 4;
            break; 
            
        }  
    }

    switch(e.keyCode){  
        case 32:
             //speed+=5;
            pause = !pause;
        break;  
    }

    switch(e.keyCode){  
        case 13:
             audio.play(); 
           enter = !enter;
        break;  
    }

    switch(e.keyCode){  
        case 81:
             
           rules = !rules;
        break;  
    }

})
//DIMENSIÓN (CAMINO DEL JUGADOR Y TARGET)
function update(){ 

        if (!pause) {
        if (dir == 1) {
            player.y-=speed;
            if (player.y+50 < 0) {
                player.y = 1655;
            }
        }
        if (dir == 2) {
            player.y+=speed;
            if (player.y+50 > 1900) {
                player.y = -50;
            }
        }
        if (dir == 3) {
            player.x+=speed;
            if (player.x+50 > 1655) {
                player.x = -50;
            }
        }
        if (dir == 4) {
            player.x-=speed;
            if (player.x+50 < 0) {
                player.x = 1655;
            }
        } 

//SI EL JUGADOR ALCANZA EL TARGET SE ESCUCHARA UN SONIDO
        if (player.seTocan(target) || player.seTocan(target2)) {
            reiniciarJuego();
            audio2.play();
            alert("Has ganado");
             }
//SI EL JUGADOR TOMA UNA SODA SUMARA PUNTOS
        if (player.seTocan(object)) {

            object.x = 1200;
            object.y = 1200;
            score+=10
            colect.play();
            
        }

        if (player.seTocan(object2)) {

            object2.x = 1200;
            object2.y = 1200;
            score+=10
            colect.play();
        }
        if (player.seTocan(object3)) {

            object3.x = 1200;
            object3.y = 1200;
            score+=10
            colect.play();
        }

        if (player.seTocan(object4)) {

            object4.x = 1200;
            object4.y = 1200;
            score+=10
            colect.play();
        }

        if (player.seTocan(object5)) {

            object5.x = 1200;
            object5.y = 1200;
            score+=10
            colect.play();
        }

        if (player.seTocan(object6)) {

            object6.x = 1200;
            object6.y = 1200;
            score+=10
            colect.play();
        }
        if (player.seTocan(object7)) {

            object7.x = 1200;
            object7.y = 1200;
            score+=10
            colect.play();
        }
        if (player.seTocan(object8)) {

            object8.x = 1200;
            object8.y = 1200;
            score+=10
            colect.play();
        }
        if (player.seTocan(object9)) {

            object9.x = 1200;
            object9.y = 1200;
            score+=10
            colect.play();
        }
        if (player.seTocan(object10)) {

            object10.x = 1200;
            object10.y = 1200;
            score+=10
            colect.play();
        }
        if (player.seTocan(object11)) {

            object11.x = 1200;
            object11.y = 1200;
            score+=10
            colect.play();
        }
        if (player.seTocan(object12)) {

            object12.x = 1200;
            object12.y = 1200;
            score+=10
            colect.play();
        }
        if (player.seTocan(object13)) {

            object13.x = 1200;
            object13.y = 1200;
            score+=10
            colect.play();
        }
        if (player.seTocan(object14)) {

            object14.x = 1200;
            object14.y = 1200;
            score+=10
            colect.play();
        }
        if (player.seTocan(object15)) {

            object15.x = 1400;
            object15.y = 1400;
            score+=10
            colect.play();
        }

      

        for (var i = walls.length - 1; i >= 0; i--) { 

            if (player.seTocan(walls[i])) {
                

                if (dir == 1) {
                    player.y+=speed;
                }
                if (dir == 2) {
                    player.y-=speed;
                }
                if (dir == 3) {
                    player.x-=speed;
                }
                if (dir == 4) {
                    player.x+=speed;
                }
                dir = 0;
            }

            if (target.seTocan(walls[i])) {
                target.x = 1485;
                target.y = 1050;
            }
            if (target2.seTocan(walls[i])) {
                target2.x = 135;
                target2.y = 1050;
            }
            if (object.seTocan(walls[i])) {
                object.x = 110;
                object.y = 250;
            }

            if (object2.seTocan(walls[i])) {
                object2.x = 220;
                object2.y = 530;
            }

            if (object3.seTocan(walls[i])) {
                object3.x = 500;
                object3.y = 530;
            }

            if (object4.seTocan(walls[i])) {
                object4.x = 400;
                object4.y = 120;
            }
            if (object5.seTocan(walls[i])) {
                object5.x = 1530;
                object5.y = 200;
            }
            if (object6.seTocan(walls[i])) {
                object6.x = 1030;
                object6.y = 200;
            }

            if (object7.seTocan(walls[i])) {
                object7.x = 730;
                object7.y = 790;
            }
            if (object8.seTocan(walls[i])) {
                object8.x = 1330;
                object8.y = 870;
            }
            if (object9.seTocan(walls[i])) {
                object9.x = 1260;
                object9.y = 200;
            }
            if (object10.seTocan(walls[i])) {
                object10.x = 130;
                object10.y = 800;
            }
            if (object11.seTocan(walls[i])) {
                object11.x = 1250;
                object11.y = 950;
            }
            if (object12.seTocan(walls[i])) {
                object12.x = 1230;
                object12.y = 670;
            }
            if (object13.seTocan(walls[i])) {
                object13.x = 820;
                object13.y = 520;
            }
            if (object14.seTocan(walls[i])) {
                object14.x = 1450;
                object14.y = 380;
            }
            if (object15.seTocan(walls[i])) {
                object15.x = 690;
                object15.y = 330;
            }
        } 

    } 

    paint(); 
    window.requestAnimationFrame(update); 
}

//DISEÑO DE LABERINTO
function paint(){

    //ctx.drawImage(inicioFondo,0,0,1645,1100);
//MAPA DE FONDO

ctx.drawImage(fondoImg,0,0,1645,1100);
   // ctx.fillRect(0,0,1645,1100);
  

//PUNTAJE Y TITULO
    ctx.font = "20px ARIAL";
    ctx.fillStyle = "BLACK";
    ctx.fillText("SCORE: "+score, 5, 20);
    ctx.font = "20px ARIAL";
    ctx.fillStyle = "BLACK";
    ctx.fillText("REGULAR SHOW ", 730, 23);
    ctx.font = "20px ARIAL";
    ctx.fillStyle = "BLACK";
    ctx.fillText("REGLAS (Q) ", 450, 23);


    ctx.font = "30px Arial";
    ctx.fillStyle = "BLACK";

    // Dibuja el tiempo restante en el canvas
    ctx.fillText("Tiempo: " + tiempoRestante + "s", 1200, 30);
    
//JUGADORES
    ctx.drawImage(image,player.x,player.y,40,40);
    ctx.drawImage(image2, target.x, target.y, 40, 40);
    ctx.drawImage(image2, target2.x, target2.y, 40, 40);


//PUNTOS (SODAS)
    ctx.drawImage(image3, object.x, object.y, 40, 40);
    ctx.drawImage(image3, object2.x, object2.y, 40, 40);
    ctx.drawImage(image3, object3.x, object3.y, 40, 40);
    ctx.drawImage(image3, object4.x, object4.y, 40, 40);
    ctx.drawImage(image3, object5.x, object5.y, 40, 40);
    ctx.drawImage(image3, object6.x, object6.y, 40, 40);
    ctx.drawImage(image3, object7.x, object7.y, 40, 40);
    ctx.drawImage(image3, object8.x, object8.y, 40, 40);
    ctx.drawImage(image3, object9.x, object9.y, 40, 40);
    ctx.drawImage(image3, object10.x, object10.y, 40, 40);
    ctx.drawImage(image3, object11.x, object11.y, 40, 40);
    ctx.drawImage(image3, object12.x, object12.y, 40, 40);
    ctx.drawImage(image3, object13.x, object13.y, 40, 40);
    ctx.drawImage(image3, object14.x, object14.y, 40, 40);
    ctx.drawImage(image3, object15.x, object15.y, 40, 40);
    
    

  
    for (var i = walls.length - 1; i >= 0; i--) {
        walls[i].paint(ctx);
    }

    if (pause) {

//DISEÑO DE PAUSADO
    ctx.drawImage(pauseImg,0,0,1645,1100);
    //ctx.fillRect(0,0,700,700);
    ctx.font = "50px ARIAL";
    ctx.fillStyle = "BLACK";
    ctx.fillText("P A U S A ", 285, 225);
    ctx.fillText("(PRESIONA [ESPACIO] PARA REANUDAR)", 300, 1070);

    }

    if (rules) {

        //DISEÑO DE PAUSADO
            ctx.drawImage(rulesImg,0,0,1645,1100);
            ctx.font = "30px ARIAL";
            ctx.fillStyle = "WHITE";
            ctx.fillText("1.-UTILIZA (W,A,S,D) PARA MOVERTE", 285, 225);
            ctx.fillText("2.-UTILIZA (ESPACIO) PARA PAUSAR", 285, 325);
            ctx.fillText("3.-ENTRE MÁS VICTORIAS TENGAS MÁS RAPIDO SERA TU JUGADOR", 285, 425);
            ctx.fillText("4.-COLECCIONA LAS SODAS PARA GANAR PUNTOS", 285, 525);
            ctx.fillText("5.-TIENES DOS RUTAS DISTINTAS AL IGUAL QUE DOS SALIDAS", 285, 625);
            ctx.fillText("(PRESIONA [Q] PARA REGRESAR AL JUEGO)", 300, 970);
        
            }

    if (enter) {

        //DISEÑO DE PAUSADO
            ctx.drawImage(inicioFondo,0,0,1645,1100);
            //ctx.fillRect(0,0,700,700);
            
            ctx.font = "50px ARIAL";
            ctx.fillStyle = "WHITE";
            ctx.fillText("REGULAR SHOW ", 85, 225);
            ctx.fillText("RESCUE RIGBY ", 85, 325);
            ctx.fillText("(PRESIONA [ENTER] PARA JUGAR)", 720, 150);
            
            
            }


            

 
}

    update();



function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return "rgba("+r+","+g+","+b+",0.5)";
}
function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
} 


//TEMPORIZADOR
  function dibujarTiempo() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 

    
  }

  // FUNCION PARA ACTUALIZAR EL TEMPORIZADOR
  function actualizarTemporizador() {
    tiempoRestante++;

    if (tiempoRestante >= 0) {
      dibujarTiempo(); // DIBUJA EL CRONOMETRO
    } else {
      clearInterval(intervalID); 
      
    }
  }

  // INICIA EL TIEMPO
  var intervalID = setInterval(actualizarTemporizador, intervalo);

  // LLAMA LA FUNCION DE TIEMPO
  dibujarTiempo();


  //ESTA FUNCIÓN PERMITE REINCIAR EL JUEGO UNA VEZ QUE SE CONSIGUIO GANAR
  function reiniciarJuego() {
   
    score = 0;
    player.x = 20;
    player.y = 40;
    
    // RESTABLECE LA POSICION DE LOS OBJETIVOS
    target.x = 1200;
    target.y = 1000;
    target2.x = 200;
    target2.y = 1000;

    // RESTABLECE LA POSICIÓN DE LAS COLECTAS (SODAS)
    object.x = 200;
    object.y = 300;
    object2.x = 200;
    object2.y = 300;
    object3.x = 200;
    object3.y = 300;
    object4.x = 200;
    object4.y = 300;
    object5.x = 200;
    object5.y = 300;
    object6.x = 200;
    object6.y = 300;
    object7.x = 200;
    object7.y = 300;
    object8.x = 200;
    object8.y = 300;
    object9.x = 200;
    object9.y = 300;
    object10.x = 200;
    object10.y = 300;
    object11.x = 200;
    object11.y = 300;
    object12.x = 200;
    object12.y = 300;
    object13.x = 200;
    object13.y = 300;
    object14.x = 200;
    object14.y = 300;
    object15.x = 200;
    object15.y = 300;

    // REANUDA SI EL JUEGO ESTA EN PAUSA
    pause = false;
    
    // REINICIA EL TEMPORIZADOR
    tiempoRestante = tiempoTotal;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // PERMITE INICIAR NUEVAMENTE EL JUEGO
    update();
}

