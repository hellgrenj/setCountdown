setcountdown
=========================
setTimeout with simple stdout.write countdown for your node script


`npm install setcountdown --save`
##usage
```
var countdownToken = '///';
var countdownInterval = 500;

var timer = require('setcountdown');
timer.setCountdown(function(){
  console.log('ready to go!');
},5000,countdownToken,countdownInterval);
```
countdownInterval is optional and defaults to 1000 (1 second)
