var SpeechRecognition=window.webkitSpeechRecognition;
var rec=new SpeechRecognition();

function start(){
    document.getElementById("text_box").innerHTML="";
    rec.start();
}

rec.onresult=function(event){

console.log(event);
var content=event.results[0][0].transcript;
console.log(content);
document.getElementById("text_box").innerHTML=content;

if (content=="take my selfie"){
    console.log("take my selfie");
    speak();
}

}


function speak(){
    var synth=window.speechSynthesis;
    text="Taking your selfie in 5 seconds";
    var utter=new SpeechSynthesisUtterance(text);
    synth.speak(utter);
    
    Webcam.attach(camera);

    setTimeout(function(){
        take_snapshot();
        save();
    
    },5000);
    
    }
    
    camera=document.getElementById("camera");
    Webcam.set({
        width:320,
        height:250,
         image_format:'png',
        png_quatlity:100
    });


    function take_snapshot(){
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML='<img id="selfie_img" src="'+data_uri+'">';
        });}
    
        function save(){
            link=document.getElementById("link");
            image=document.getElementById("selfie_img").src;
            link.href=image;
            link.click();
        }