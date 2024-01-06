
let timeSlot = []
let btnInfo = document.querySelectorAll('.btn')
let textInfo = document.querySelectorAll('.description')

$(function () {
  
  let currentDate = dayjs().format('dddd, MMMM d');
  $('#currentDay').text(currentDate);
  
  let currentHour = dayjs().format('HH');
  let currentMinute = dayjs().format(' : mm');
  $('#currentTime').text(currentHour + currentMinute);

  for(let i = 9; i <= 17; i++) {
  let times = document.getElementById(i);
  timeSlot.push(times);
}

for(let i = 0; i < textInfo.length;) {
     let eventOnScreen = localStorage.getItem("event-saved " + i);
      let realEventOnScreen = JSON.parse(eventOnScreen);
        if (realEventOnScreen) {
          $(textInfo[i]).text(realEventOnScreen);
          i++;
          } else {
            i++;
            continue;
          }
   }


for(let i = 0; i < timeSlot.length; i++) {
  if (parseInt(timeSlot[i].id) === parseInt(currentHour)) {
    timeSlot[i].classList.add("present");
  } else if (
    parseInt(timeSlot[i].id) > parseInt(currentHour)) {
      timeSlot[i].classList.add("future");
    } else {
    parseInt(timeSlot[i].id) < parseInt(currentHour); {
      timeSlot[i].classList.add("past");
    }
  }
}


for(let i = 0; i < btnInfo.length; i++) {
 btnInfo[i].addEventListener("click", function() {
  if (textInfo[i]) {
    let event = JSON.stringify(textInfo[i].value);
      localStorage.setItem("event-saved " + i, event);
  }
 })
}

  }
,)
