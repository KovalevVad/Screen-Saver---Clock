let time = document.querySelector('.time');
let date = document.querySelector('.date');
let arrowSeconds = document.querySelector('#arrow__seconds')
import {aormatedTime} from './helper.js';


setInterval(function() {
  let newTime = new Date();
  let seconds = newTime.getSeconds();
  console.log(seconds)

  time.innerHTML = (aormatedTime(newTime.getHours()) + ':' + aormatedTime(newTime.getMinutes()) + ':' + aormatedTime(newTime.getSeconds()));
  date.innerHTML = (newTime.getDate() + " " + newTime.toLocaleString('en', { month: 'long' }) + ', ' + newTime.getFullYear());

  // arrowSeconds.style.cssText = `transofrm: rotate${seconds}deg`
}, 1000);



