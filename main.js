img = "";
status = "";
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML ="status :Detecting Object";
}
function preload(){
    img =loadImage('dog_cat.jpg');
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    Text("Dog", 45, 75);
    nofill();
    storke("#FF0000");
    rect(30, 60, 450, 350 );

    fill("#FF0000");
    Text("Cat", 45, 75);
    nofill();
    storke("#FF0000");
    rect(30, 60, 450, 350 );
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector
}