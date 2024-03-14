status = "";
input_text="";


function setup(){
canvas=createCanvas(320,300);
canvas.position(525,300);
video=createCapture(VIDEO);
video.size(300,290);
video.hide(); 
}

function start(){
    object_detector=ml5.objectDetector( 'cocossd', modelLoaded);
    document.getElementById('status').innerHTML="status : Detecting Objects";
    input_text=document.getElementById("input_id").value;
}

function modelLoaded(){
    console.log("model_loaded");
    status=true;
}

function draw(){
    image(video,0,0,320,300);
}