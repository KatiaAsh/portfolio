var katia = document.querySelector(".katia");
katia.addEventListener("click", function (event) {
  console.log('working');
  katia.muted = true;
})

function checkMute() {
    alert(katia.muted);
}


// var song1  = new Audio();
//var src1  = document.createElement("source");
//src1.type = "audio/mpeg";
//src1.src  = "../songs/1.mp3";
//song1.appendChild(src1);
//song1.play();

//myAudio = new Audio('../songs/5.mp3');
//myAudio.loop = true;
//myAudio.play();

//var song2  = new Audio();
//var src2  = document.createElement("source");
//src2.type = "audio/mpeg";
//src2.src  = "../songs/2.mp3";
//song2.appendChild(src2);
//song2.play

myAudio = new Audio('../songs/15.mp3');
if (typeof myAudio.loop == 'boolean')
{
    myAudio.loop = true;
}
else
{
    myAudio.addEventListener('ended', function() {
        this.currentTime = 1;
        this.play();
    }, false);
}
myAudio.play();
