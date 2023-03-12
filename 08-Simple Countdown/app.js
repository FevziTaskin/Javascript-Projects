/*
March 20, 2023 has been determined as the date to be CountDown.
 If you use the app later than this date, don't forget to update the countdown date...
*/

const countdown = () => {
  // The date that you want to countdown to (in millisecond format)
  const countDate = new Date("March 20, 2023 00:00:00").getTime();
  // Current time (in millisecond format)
  const now = new Date().getTime();
  // Gap (in millisecond format)
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;
};

setInterval(() => {
  countdown();
}, 1000);
