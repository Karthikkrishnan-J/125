leftWristX = "";
rightWristX = "";
wrist = "";
function setup(){
    canvas = createCanvas(550,500);
    canvas.center();
    camera = createCapture(VIDEO);
    camera.size(550, 500);
    machine = ml5.poseNet(camera, modalLoaded);
    machine.on("pose", gotPoses);
}
function draw(){
    background("blue");
    textSize(wrist);
    fill("yellow");
    text("KARTHIK", 275, 250);
}
function modalLoaded(){
    console.log("modal loaded")
}
function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        leftWristX = result[0].pose.leftWrist.x
        rightWristX = result[0].pose.rightWrist.x 
        wrist = leftWristX - rightWristX;

    }
}