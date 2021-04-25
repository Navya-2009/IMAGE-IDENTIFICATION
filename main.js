Webcam.set({

    width: 350,
    height: 300,
    image_format:'png',
    png_quality: 90
});

var camera = document.getElementById("camera");
Webcam.attach('camera');

function capture(){

    Webcam.snap(function(data_uri){

        document.getElementById("result").innerHTML = "<img id= 'snap' src = '"+data_uri+"'>";
    });
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/RHAong9dc/model.json', modelLoaded);

function modelLoaded(){

    console.log('modelLoaded');
}

function identify(){

    img = document.getElementById("snap");
    classifier.classify(img,gotResult);

} 

function gotResult(error,results){

    if (error) {
        
        console.error(error);
    }

    else {
        console.log(results);
        document.getElementById("objectname").innerHTML = results[0].label;
        document.getElementById("accuracyvalue").innerHTML = results[0].confidence.toFixed(3);

    }


}