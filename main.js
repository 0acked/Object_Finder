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
    if(status != "")
    {
        for(i=0; i<results_array.length; i++)
        {
            
            
            percent = floor(results_array[i].confidence * 100);
            text(results_array[i].label+ " "+percent+"%",results_array[i].x + 15, results_array[i].y + 15);
            if(results_array.label == input_stuff)
            {
                videoLiveView.stop();
                objectDetector.detect(gotResult);
                document.getElementById("stats").innerHTML = "Status: Objects Detected!";
                speech = window.speechSynthesis;
                new SpeechSynthesisUtterance("Object has been found!")
                speech.speak(utterThis);
            }
            else
            {
                document.getElementById("found").innerHTML = "Object Not Found"
            }
        }
    }
}
function gotResult(results){
    results_array = results;

}