import { newTimeDate, newClock } from './helper.js';

newTimeDate();
newClock();

setInterval(function() {
  let newTime = new Date();
  let minutes = newTime.getMinutes() * 60;
  let hours = newTime.getHours() * 60 + minutes / 12;

  newTimeDate();
  newClock(hours, minutes);
}, 1000);


