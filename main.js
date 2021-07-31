function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();


    video.createCapture(VIDEO);
    video.hide();
}



function draw() {
    image(video, 0, 0, 600, 500);

}


song = "";

function preload() {
    song = loadSound("music.mp3");

}

let content = document.getElementsByClassName("play").value;


function play() {
    song.play();

    if (content == "Play") {
        document.getElementsByClassName("play").innerHTML = "Pause";
    }
    if (content == "Pause") {
        document.getElementsByClassName("play").innerHTML = "Play";

        song.stop();

    }
}