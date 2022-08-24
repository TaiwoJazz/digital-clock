const display = document.querySelector(".time");

function getDate() {
  const date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  display.innerHTML = `<h1><span class="hr">${hour}</span>:<span class="min">${minute}</span>:<span class="sec">${second}</span> <span class="daylight"></span></h1>`;

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

  let daylight = document.querySelector(".daylight");
  if (hour < 12) {
    daylight.textContent = "AM";
  } else {
    daylight.textContent = "PM";
  }
}

setInterval(getDate, 1000);
