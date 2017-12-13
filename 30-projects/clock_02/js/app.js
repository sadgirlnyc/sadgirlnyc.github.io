var clock = document.getElementById('clock');
var hexColor = document.getElementById('hex-color');

function hexClock() {
  var time = new Date();
  var hours = (time.getHours() % 12).toString();
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();
  ap = (hours > 12) ? " am" : " pm";
   hours = (hours == 0) ? 12 : hours;
   hours = (hours > 12) ? hours - 12 : hours;

if (hours.length < 2){
  hours = "0" + hours;
}

if (minutes.length < 2){
  minutes = "0" + minutes;
}

if (seconds.length < 2){
  seconds = "0" + seconds;
}

var clockStr = hours + " : " + minutes + " : " + seconds + ap ;
var hexColorStr = "#" + hours + minutes + seconds;

clock.textContent = clockStr;
hexColor.textContent = hexColorStr;
document.body.style.background = hexColorStr;

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var currentWeekDay = days[time.getDay()];
var currentDay = time.getDate();
var currentMonth = months[time.getMonth()];
var currentYear = time.getFullYear();
var date = currentWeekDay + ", " + currentDay + " " + currentMonth + " " + currentYear;
document.getElementById('date').innerHTML = date;

}

hexClock();
setInterval(hexClock, 1000);



/*function renderTime(){

  var currentTime = new Date();
  var h = currentTime.getHours();
  var m = currentTime.getMinutes();
  var s = currentTime.getSeconds();

  setTimeout('renderTime()', 1000);

  if (h == 0) {
    h = 12;
  } else if (h > 12){
    h = h - 12;
    diem = "PM";
  }

  if (h < 10) {
    h = "0" + h;
  }

  if (m < 10) {
    m = "0" + m;
  }

  if (s < 10) {
    s = "0" + s;
  }

  var myClock = document.getElementById('clock');
  myClock.textContent = h + ":" + m + "." + s;
  myClock.innerText = h + ":" + m + "." + s;
}

renderTime(); */
