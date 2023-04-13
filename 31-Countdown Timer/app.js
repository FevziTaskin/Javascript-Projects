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

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

/* 
In case of futureDate expires , every and each time we run the application, a functionality added 
which adds 10 days to currentDate just to show the app works correctly even though there is a functionality 
when countdown expires
*/

/* let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0); */

/*  if you don't want to see countdown working each and every time we run the app, just remember to change the future date according to your date you run the app to see the countdown work  */

// months are ZERO index based;
let futureDate = new Date(2023, 3, 24, 11, 30, 0);
// console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

/* futureTime in ms */
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const difference = futureTime - today;

  /* 
  1s = 1000ms
  1m = 60s
  1hr = 60min
  1d = 24hr
  */

  /* values in ms  */
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  /* calculate all values */
  let days = difference / oneDay;
  // console.log(days);
  days = Math.floor(days);

  let hours = Math.floor((difference % oneDay) / oneHour);
  // console.log(hours);

  let minutes = Math.floor((difference % oneHour) / oneMinute);
  // console.log(minutes);

  let seconds = Math.floor((difference % oneMinute) / 1000);
  // console.log(seconds);

  /* set values array */
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (difference < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired>sorry,  this giveaway has expired !  </h4>"`;
  }
}

/* countdown */
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
