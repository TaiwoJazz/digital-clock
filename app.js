const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const displaytime = document.querySelector(".time");
const displayday = document.querySelector(".day");

function getDate() {
  const date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  displaytime.innerHTML = `<h1>
  <span class="hr">${hour}</span>:<span class="min">${minute}</span>:<span class="sec">${second}</span>`;
  // <span class="daylight"></span></h1>

  let hr = document.querySelector(".hr");
  let min = document.querySelector(".min");
  let sec = document.querySelector(".sec");

  if (second < 10) {
    sec.textContent = `0${second}`;
  } 
  
  if (minute < 10) {
    min.textContent = `0${minute}`;
  }
  
  if (hour < 10) {
    hr.textContent = `0${hour}`;
  }

  // let daylight = document.querySelector(".daylight");
  // if (hour < 12) {
  //   daylight.textContent = "AM";
  // } else {
  //   daylight.textContent = "PM";
  // }
}

setInterval(getDate, 1000);


function currentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const day = today.getDate()
  const month = months[today.getMonth()];
  const weekday = weekdays[today.getDay()];

  displayday.innerHTML = `<P>${weekday} <span class="format">${day}</span> ${month}, ${year}</p>`

  let format = document.querySelector('.format')
  if (day == 1 || day == 21 || day == 31) {
    format.textContent = `${day}st`
  } else if (day == 2 || day == 22) {
    format.textContent = `${day}nd`
  } else if (day == 3) {
    format.textContent = `${day}rd`
  } else {
    format.textContent = `${day}th`
  }
}
setInterval(currentDate, 10000);
