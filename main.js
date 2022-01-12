Webcam.set({
width:350,
height:300,
image_format: 'png',
png_quality:90
});

camera = document.getElementById("camera")

Webcam.attach( '#camera' );


function capture_img(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/lYrpm9d2F/model.json',modelLoaded);


function check_img(){
     img = document.getElementById('captured_image');
     classifier.classify(img, gotResult);
}
function modelLoaded(){
    console.log('LOADED MODEL        !!!!!!!!!!!!!!!!!');
}

function gotResult(error, results)
{
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }

}

