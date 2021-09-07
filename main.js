function preload(){}

function setup(){
    canvas= createCanvas(250,250);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/c8sZyZBSk/model.json',modelLoaded);
}

function modelLoaded(){
    console.log("Model Loaded");
}

function draw(){
    image(video,0,0,250,250);
    classifier.classify(video, gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("result").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}