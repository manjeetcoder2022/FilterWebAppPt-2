function Select(){
    selected_item= document.getElementById("filter_type").value
    if(selected_item=="Both"){
        document.getElementById("demo").innerHTML= "<img src='chasma.png'> <br> <img src='mustache.png'> "
    }else{
    document.getElementById("demo").innerHTML= "<img src='" + selected_item+"'>"
    }
}

function preload(){

}
function setup(){
    canvas= createCanvas(350,300)
 canvas.center()
 video= createCapture(VIDEO)
 video.hide()
poseNet= ml5.poseNet(video,modelLoaded)
poseNet.on('pose',getPoses)
}

function draw(){
    img= image(video,0,0,350,300)
}

function modelLoaded(){
    console.log("poseNet initializing successfully ")
}
function getPoses(results){
    if(results.length>0){
console.log(results)
console.log("For spex X lefteye = "+results[0].pose.leftEye.x)
console.log("For spex Y lefteye = "+results[0].pose.leftEye.y)
console.log("For spex X righteye= "+results[0].pose.rightEye.x)
console.log("For spex Y righteye = "+results[0].pose.rightEye.y)
console.log("For Mustache X = "+results[0].pose.nose.x +20)
console.log("For Mustache Y = "+results[0].pose.nose.y+20)
}
}