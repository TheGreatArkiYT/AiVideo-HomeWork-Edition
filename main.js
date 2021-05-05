objects = [];
status = "";
var modlText = "Model Has Loaded";

function setup(){
    canvas = createCanvas(380 , 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380 , 380);
    video.hide();
}
function modelLoaded() {
    alert(modlText);
    console.log(modlText);
    status = true;
}
function start() {
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting";
    object_name = document.getElementById("name").value;
}