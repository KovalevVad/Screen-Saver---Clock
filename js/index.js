import { aormatedTime } from './helper.js';

let time = document.querySelector('.time');
let date = document.querySelector('.date');
let arrowHours = document.querySelector('#arrow__hours');
let arrowMinutes = document.querySelector('#arrow__minutes');

function rotate(deg) {
  deg *= 0.1
  return deg
}

setInterval(function() {
  let newTime = new Date();
  let minutes = newTime.getMinutes() * 60;
  let hours = newTime.getHours() * 60 + minutes / 12;

  time.innerHTML = (aormatedTime(newTime.getHours()) + ':' + aormatedTime(newTime.getMinutes()) + ':' + aormatedTime(newTime.getSeconds()));
  date.innerHTML = (newTime.getDate() + " " + newTime.toLocaleString('en', { month: 'long' }) + ', ' + newTime.getFullYear());

  arrowHours.style.cssText = `transform: rotate(${rotate(hours)}deg)`
  arrowMinutes.style.cssText = `transform: rotate(${rotate(minutes)}deg)`
}, 1000);


