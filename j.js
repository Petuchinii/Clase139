objectDetector= "";

img = "";
objects = [];
status = "";

function preload(){
  img = loadImage('descarga.jpg');
}


function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Estado: detectando objetos";
}

function modelLoaded() {
    console.log("modelo cargado");
    status= true;
    objectDetector.detect(img, gotResult)
}

function gotResult(error , result) {
    if(error){
        console.log(error);
    }else{
        console.log(result);
        objects = result;
    }
}

function draw() {
    image(img, 0,0,600,700);
    if(status="") {
        for (var i=0; i<objects.lenght; i++){
        document.getElementById("status").innerHTML="objeto detectado";
        fill(250,0,0);
        percent= floor(objects[i].confidence*100);
        text(objects[i].label+ "" +percent+"%"+objects[i].x+15,objects[i].y+15);
        noFill();
        stroke(250,0,0);
        rect(objects[i].x,objects[i].y,objects[i].width, objects[i].height);
    }
    }
}