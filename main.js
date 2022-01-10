function preload() {
}

function setup() {
    canvas = createCanvas(1000, 600);
    canvas.position(200,250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,150,90,640,480);

    fill(0,128,0)
    stroke(0,128,0)
    circle(50,50,70)

    fill(255, 0, 0)
    stroke(255, 0, 0)
    rect(85, 40, 800, 20);

    fill(0,128,0)
    stroke(0,128,0)
    circle(900,50,70)


    fill(255, 0, 0)
    stroke(255, 0, 0)
    rect(890, 85, 20, 500);

    fill(255, 0, 0)
    stroke(255, 0, 0)
    rect(45, 85, 20, 500);
}

function take_snapshot() {
    save("Photo_frame.jpeg");
}

