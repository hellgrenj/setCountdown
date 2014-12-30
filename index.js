exports.setCountdown = function(task, waitTime, token, countDownInterval) {
  if (!countDownInterval) {
    countDownInterval = 1000; // 1 second
  }
  var numberOfCounts = waitTime / countDownInterval;
  for (var i = numberOfCounts; i >= 0; i--) {
    if (i == numberOfCounts) {
      execute(waitTime, task);
    } else {
      countDown(i * countDownInterval, numberOfCounts - i, token);
    }
  }
};
function countDown(time, value, token) {
  setTimeout(function() {
    process.stdout.clearLine();
    var tokens = new Array(value).join(token);
    process.stdout.write(tokens + '\r');
  }, time);
}

function execute(time, task) {
  setTimeout(function() {
    process.stdout.clearLine();
    task();
  }, time);
}
