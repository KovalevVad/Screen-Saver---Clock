let time = document.querySelector('.time');
let date = document.querySelector('.date');
let arrowHours = document.querySelector('#arrow__hours');
let arrowMinutes = document.querySelector('#arrow__minutes');

function rotate(deg) {
  deg *= 0.1
  return deg
}

export const aormatedTime = (numb) => +numb < 10 ? '0' + +numb : numb

export function newTimeDate() {
  let newTime = new Date();
  time.innerHTML = (aormatedTime(newTime.getHours()) + ':' + aormatedTime(newTime.getMinutes()) + ':' + aormatedTime(newTime.getSeconds()));
  date.innerHTML = (newTime.getDate() + " " + newTime.toLocaleString('en', { month: 'long' }) + ', ' + newTime.getFullYear());
}

export function newClock(hours, minutes) {
  arrowHours.style.cssText = `transform: rotate(${rotate(hours)}deg)`
  arrowMinutes.style.cssText = `transform: rotate(${rotate(minutes)}deg)`
}

