img = "";
status = "";

function preload(){
    img = loadImage("laptop.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects ";
    
}

function modelLoaded(){
    console.log("model Loaded");
    status = "true";
    objectDetector.detect(img,gotResult)
}

function gotResult(error,results){
 if(error){
     console.log(error);
 }else{
     console.log(results);
     
 }
}

function draw(){
    image(img,0,0,640,420);


}