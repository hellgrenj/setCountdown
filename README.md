setCountdown
=========================
simple console.log countdown for your node script


`npm install setCountdown --save`
##Usage
```
var countdownToken = '///';
var countdownInterval = 500;

var timer = require('setCountdown');
timer.setCountdown(function(){
  console.log('ready to go!');
},5000,countdownToken,countdownInterval);
```
countdownInterval is optional and default to 1000 (1 second)
