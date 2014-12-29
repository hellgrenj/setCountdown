var countdownToken = '///';
var countdownInterval = 500;

var timer = require('./index');
timer.setCountdown(function(){
  console.log('ready to go!');
},5000,countdownToken,countdownInterval);
