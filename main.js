img="";

function preload(){
img=loadImage("fruit_basket.jpg")
}

function setup(){
canvas=createCanvas(640,420)
canvas.center();
objectDetector=ml5.objectDetector("cocoSSD",modelLoaded)
}

function draw(){
image(img,0,0,540,320);



}

function modelLoaded(){
    console.log("model is loaded");
    Status=true;
    objectDetector.detect(img,getResults);
}

function getResults(error,results){
    if(error){
        console.log(error);

        
    }
    else{
        console.log(results);
    }
}