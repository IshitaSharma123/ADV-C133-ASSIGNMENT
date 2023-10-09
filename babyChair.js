Status = "";
babyChair_IMG = '';
objects = [];

function preload() {
    babyChair_IMG = loadImage("IMG-6964.JPG");
}

function setup() {
    canvas = createCanvas(640, 640);
    canvas.center();

    video = createCanvas(VIDEO);
    video.size(640, 640);
    video.hide();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects...";
}

function modelLoaded() {
    console.log("Model Loaded!");
    Status = true;
    objectDetector.detect(video, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    } else {
        console.log(results);
        objects = results;
    }
}

function draw() {
    image(babyChair_IMG, 0, 0, 640, 350);

    if(Status != ""){
        for(i = 0; i < objects.length; i++) {
            document.getElementById("Status").innerHTML = "Status: Objects Detected!";

            fill("#fc0303");
            percent = floor(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("#fc0303");
            rect(objects[i].x - 800, object[i].y - 175, objects[i].width - 910, objects[i].height - 2640);
        }
    }
}