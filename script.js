const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let secDeg = 360/60;
let minDeg = secDeg/60;
let hrDeg = 3/360;

let hrPosition = (hr*360/12) +(min*(secDeg)/12);
let minPosition = (min*secDeg) + (sec*minDeg);
let secPosition = sec*secDeg;

function runTheClock(){
  hrPosition = hrPosition +hrDeg;
  minPosition = minPosition + minDeg;
  secPosition = secPosition +secDeg;


  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock,1000)
