canvas = "";

function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    video = createWebcam(VIDEO);
    video.hide
}
function start(){
    objectDetector = ml5.objectDetector.detect("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects...";
    input_stuff = document.getElementById("input");
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
}
function draw(){
    image(video, 0, 0, 480, 380);
}