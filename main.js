function preload(){
} 
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    // video = createCapture(VIDEO);
    // video.size(300,300);
    // video.hide();

    // poseNet = ml5.poseNet(video, modelLoaded);
    // poseNet.on('pose', gotPoses); 
}
function draw()
{
}
function take_snapshot()
{
    save('myFilterImage.png');
}