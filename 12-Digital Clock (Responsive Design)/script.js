window.addEventListener("load", calculateTime);

function calculateTime() {
  let date = new Date();
  let dayNumber = date.getDay();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let ampm = hour >= 12 ? "PM" : "AM";
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  hour = hour % 12;
  hour = hour ? hour : "12";
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;

  document.getElementById("day").innerHTML = days[dayNumber];
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("ampm").innerHTML = ampm;

  setTimeout(calculateTime, 1000);
}
