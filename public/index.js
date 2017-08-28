// Strart nav bar section
var nav = document.querySelector(".nav"); // nav bar section
var wrapper = document.querySelector(".wrapper");

var navHeight = nav.offsetHeight;
var topOfNav = nav.offsetTop;
console.log(topOfNav);
var windowHeight = window.innerHeight;

var wrapperHeight = document.querySelector(".wrapper").offsetHeight;
console.log(wrapperHeight);

function fixNav() {
  var currentScroll = window.scrollY;

  if (currentScroll >= topOfNav) {
    document.body.style.paddingTop = navHeight;
    nav.classList.remove('bottom');
    nav.classList.add('top');
  } else {
    nav.classList.remove('top');
    nav.classList.add('bottom');
  }
  if (windowHeight - scrollY - navHeight <= wrapperHeight) {
    wrapper.style.display = 'none';
  } else {
    wrapper.style.display = 'block';
  }
}

window.addEventListener('scroll', fixNav);

// End nav bar section

// openWeatherMap start weather

// var weather;
//
// var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
// var apiKey = '&APPID=c25c2d129996c35070daaa3925904453'
// var units = '&units=metric'
//
// var input;
//
// function setup() {
//
//   var button = select('#sumbit');
//   button,mousePressed(weatherAsk)
//
//   input = select('#city');
//   console.log(input);
//
//   function weatherAsk() {
//     var url = api + input.value() + apiKey + units;
//     loadJSON(url, gotData);
//     console.log(url);
//   }
// }
//
// function gotData(data) {
// weather = data;
// }
//
// function draw() {
//   if(weather){
//     var temp = weather.main.temp;
//     var humidity = weather.main.humidity;
//   }
// }
// openWeatherMap end weather

// open-notify start weather partII

// var lineX = 0;
// var url = 'http://api.open-notify.org/iss-now.json'
//
// var issX = (width/360)*(180+long);
// var issY = (height/360)*(90-lat);
//
// function setup() {
//   setInreval(askISS, 1000);
// }
//
// function askISS() {
//   loadJSON(url, gotData, 'jsonp');
// }
//
// function gotData(data){
//   var lat = data.iss_position.latitude;
//   var long = data.iss_position.longitude;
//   issX = map(lat, -90, 90, 0, width);
//   issY = map(long, -90, 90, 0, height);
//   console.log(data);
// }
//
// function draw() {
//   background(51);
//
//   stroke(255);
//   line(lineX, 0, lineX, height)
//   line= lineX + 5;
//   if(lineX > width) {
//     lineX = 0;
//   }
// };

//  open-notify end weather partII

// wordnik start related Words

var url1 = 'http://api.wordnik.com/v4/word.json/';
var word =  'rainbow';
var url2 =  '/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

var link;

function setup() {
  link = createA('#', word);
  link.mousePressed(askWordnik);
}

function askWordnik() {
  loadJSON(url1 + word + url2, gotData);
}

function gotData() {
  var index1 = floor(random(0, data.length));
  var index2 = floor(random(0, data[index1].words.length));
  word = data[index1].words[index2];
  link.html(word);
  console.log(word);
}

// wordnik end related Words

var music = document.querySelector(".music");
music.addEventListener("click", function(event) {
  console.log('working');
  music.muted = true;
})

function checkMute() {
  alert(music.muted);
}

function toggleSound() {
  var elements = document.getElementsByTagName('audio');
  for (var e = 0; e < elements.length; elements[e].muted = !elements[e].muted, e++) ;
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

function checkusers() {
  var shouldEnable = document.getElementById('checkbox').value == 0;
  document.getElementById('add_button').disabled = shouldEnable;
}

var audio;

//Hide Pause Initially
var mute = document.getElementById("mute")
mute.addEventListener("click", function(event) {
  toggleSound();
  var play = document.getElementById("play")
  console.log(play);
  play.classList.toggle("show")
})
// $('#pause').hide();

//Initializer - Play First Song
initAudio($('#first'));

function initAudio(element) {
  var song = element.attr('./songs/10.mp3');
  var title = element.text('lama bdomik 3a sdere');
  var cover = element.attr('cover');
  var artist = element.attr('hussein al deek');

  //Create a New Audio Object
  audio = new Audio('Music/' +
    './songs/10.mp3');

  if (!audio.currentTime) {
    $('#duration').html('0.00');
  }

  $('#audio-player .title').text(title);
  $('#audio-player .artist').text(artist);

  //Insert Cover Image
  $('img.cover').attr('src', 'images/Cover/' + cover);

  $('#playlist tr').removeClass('active');
  element.parent('tr').addClass('active');
}

//Play Button
$('#play').click(function() {
  audio.play();
  $('#play').hide();
  $('#pause').show();
  $('#duration').fadeIn(400);
  showDuration();
});

//Pause Button
$('#pause').click(function() {
  audio.pause();
  $('#pause').hide();
  $('#play').show();
});

//Stop Button
$('#stop').click(function() {
  audio.pause();
  audio.currentTime = 0;
  $('#pause').hide();
  $('#play').show();
  $('#duration').fadeOut(400);
});

//Next Button
$('#next').click(function() {
  audio.pause();
  var next = $('#playlist tr.active').next();
  initAudio(next);
  audio.play();
  showDuration();
  $('#play').hide();
  $('#pause').show();

});

//Prev Button
$('#prev').click(function() {
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
$('#playlist td:nth-child(2)').dblclick(function() {
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
$('#volume').change(function() {
  audio.volume = parseFloat(this.value / 10);
});

//To Hide
//{document.getElementById("p2").style.display="none";}
//To Show
//{document.getElementById("p2").style.display="block";}

// ------------------------------------------------------------

function formatMailBody(obj) { // function to spit out all the keys/values from the form in HTML
  var result = "";
  for (var key in obj) { // loop over the object passed to the function
    result += "<h4 style='text-transform: capitalize; margin-bottom: 0'>" + key + "</h4><div>" + obj[key] + "</div>";
    // for every key, concatenate an `<h4 />`/`<div />` pairing of the key name and its value,
    // and append it to the `result` string created at the start.
  }
  return result; // once the looping is done, `result` will be one long string to put in the email body
}

function doPost(e) {

  try {
    Logger.log(e); // the Google Script version of console.log see: Class Logger
    record_data(e);

    var mailData = e.parameters; // just create a slightly nicer variable name for the data

    MailApp.sendEmail({
      to: TO_ADDRESS, subject: "Contact form submitted",
      // replyTo: String(mailData.email), // This is optional and reliant on your form actually collecting a field named `email`
      htmlBody: formatMailBody(mailData)
    });

    return ContentService. // return json success results
    createTextOutput(JSON.stringify({
      "result": "success",
      "data": JSON.stringify(e.parameters)
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) { // if error return this
    Logger.log(error);
    return ContentService.createTextOutput(JSON.stringify({"result": "error", "error": e})).setMimeType(ContentService.MimeType.JSON);
  }
}

//---------------------

function record_data(e) {
  Logger.log(JSON.stringify(e)); // log the POST data in case we need to debug it
  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName('responses'); // select the responses sheet
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var nextRow = sheet.getLastRow() + 1; // get next row
    var row = [new Date()]; // first element in the row should always be a timestamp
    // loop through the header columns
    for (var i = 1; i < headers.length; i++) { // start at 1 to avoid Timestamp column
      if (headers[i].length > 0) {
        row.push(e.parameter[headers[i]]); // add data to row
      }
    }
    // more efficient to set values as [][] array than individually
    sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);
  } catch (error) {
    Logger.log(e);
  } finally {
    return;
  }

}

const sendButton = document.querySelector('.button-success');
const thankyouMessage = document.getElementById('thankyou_message');
const gForm = document.getElementById('gform');

sendButton.addEventListener('click', function(event) {
  gForm.style.display = 'none'
  thankyouMessage.style.display = 'block';
});
