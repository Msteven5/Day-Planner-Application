// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDate = dayjs().format('dddd, MMMM d')
$('#currentDay').text(currentDate)

var currentHour = dayjs().format('HH')
var currentMinute = dayjs().format(' : mm')
$('#currentTime').text(currentHour + currentMinute)

let timeSlot = []
let divInfo = []
let btnInfo = []
let textInfo = []

for(let i = 9; i <= 17; i++) {
  let times = document.getElementById(i);
  timeSlot.push(times);
  divInfo.push(times.children);
}


for(let i = 0; i < divInfo.length; i++) { 
    btns = divInfo[i][2];
    text = divInfo[i][1];
    btnInfo.push(btns);
    textInfo.push(text);
  }
  
for(let i = 0; i < textInfo.length;) {
     let eventOnScreen = localStorage.getItem("event-saved " + i);
      let realEventOnScreen = JSON.parse(eventOnScreen);
        if (realEventOnScreen !== null) {
          $(textInfo[i]).text(realEventOnScreen);
          i++;
          } else {
            i++;
            continue;
          }
   }


for(let i = 0; i < timeSlot.length; i++) {
  if (parseInt(timeSlot[i].id) === currentHour) {
    timeSlot[i].classList.add("present");
  } else if (
    parseInt(timeSlot[i].id) > currentHour) {
      timeSlot[i].classList.add("future");
    } else {
    parseInt(timeSlot[i].id) < currentHour; {
      timeSlot[i].classList.add("past");
    }
  }
}


console.log(timeSlot);
console.log(divInfo);
console.log(btnInfo);
console.log(textInfo);

for(let i = 0; i < btnInfo.length; i++) {
 btnInfo[i].addEventListener("click", function() {
  if (textInfo[i]) {
    let event = JSON.stringify(textInfo[i].value);
      localStorage.setItem("event-saved " + i, event);
  }
 })
}

// $(function () {
//   }
// })
