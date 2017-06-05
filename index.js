var katia = document.querySelector(".katia");
katia.addEventListener("click", function (event) {
  console.log('working');
  katia.muted = true;
})

function checkMute() {
    alert(katia.muted);
}

function toggleSound() {
  var elements = document.getElementsByTagName('audio');
  for(var e = 0; e < elements.length; elements[e].muted = !elements[e].muted, e++);
}



//myAudio = new Audio('../songs/15.mp3');
//if (typeof myAudio.loop == 'boolean')
//{
  //  myAudio.loop = true;
//}
//else
//{
//     myAudio.addEventListener('ended', function() {
//         this.currentTime = 1;
//         this.play();
//     }, false);
// myAudio.play();
// }

function checkusers()
{
   var shouldEnable = document.getElementById('checkbox').value == 0;
   document.getElementById('add_button').disabled = shouldEnable;
}

var audio;

//Hide Pause Initially
var mute = document.getElementById("mute")
mute.addEventListener("click", function(event){
  toggleSound();
  var play = document.getElementById("play")
  console.log(play);
  play.classList.toggle("show")
})
// $('#pause').hide();

//Initializer - Play First Song
initAudio($('#first'));

function initAudio(element){
    var song = element.attr('./songs/15.mp3');
    var title = element.text('lama bdomik 3a sdere');
    var cover = element.attr('cover');
    var artist = element.attr('hussein al deek');

    //Create a New Audio Object
    audio = new Audio('Music/' +'./songs/10.mp3');

    if(!audio.currentTime){
        $('#duration').html('0.00');
    }

    $('#audio-player .title').text(title);
    $('#audio-player .artist').text(artist);

    //Insert Cover Image
    $('img.cover').attr('src','Pics/Cover/' + cover);

    $('#playlist tr').removeClass('active');
    element.parent('tr').addClass('active');
}


//Play Button
$('#play').click(function(){
    audio.play();
    $('#play').hide();
    $('#pause').show();
    $('#duration').fadeIn(400);
    showDuration();
});

//Pause Button
$('#pause').click(function(){
    audio.pause();
    $('#pause').hide();
    $('#play').show();
});

//Stop Button
$('#stop').click(function(){
    audio.pause();
    audio.currentTime = 0;
    $('#pause').hide();
    $('#play').show();
    $('#duration').fadeOut(400);
});

//Next Button
$('#next').click(function(){
    audio.pause();
    var next = $('#playlist tr.active').next();
    initAudio(next);
    audio.play();
    showDuration();
    $('#play').hide();
    $('#pause').show();

});

//Prev Button
$('#prev').click(function(){
    audio.pause();
    var prev = $('#playlist tr.active').prev();
    if (prev.length == 0) {
        prev = $('#playlist tr:last-child');
    }
    initAudio(prev);
    audio.play();
    showDuration();
    $('#play').hide();
    $('#pause').show();
});

//Playlist Song dblClick
$('#playlist td:nth-child(2)').dblclick(function () {
    audio.pause();
    initAudio($(this, 'td:nth-child(2)'));
    $('#play').hide();
    $('#pause').show();
    $('#duration').fadeIn(400);
    audio.play();
    showDuration();
});
//Playlist song click
$('#playlist td:nth-child(2)').click(function() {
    audio.pause();
    $('#pause').hide();
    $('#play').show();
});
//Volume Control
$('#volume').change(function(){
    audio.volume = parseFloat(this.value / 10);
});
