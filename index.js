exports.setCountdown = function(task,waitTime,token,countDownInterval){
  if(!countDownInterval){
    countDownInterval = 1000; // 1 second
  }
  var numberOfCounts = waitTime / countDownInterval;
  for(var i=numberOfCounts; i >= 0; i--){
    if(i == numberOfCounts){
      execute(waitTime,task,i);
    }else{
      countDown((i+1)*countDownInterval,numberOfCounts - i,token);
    }
  }
};
function countDown(time, value,token){
  setTimeout(function(){
    process.stdout.clearLine();
    var dots = new Array(value).join(token);
    process.stdout.write(dots + '\r');
  },time);
}
function execute(time, task){
  setTimeout(function(){
    process.stdout.clearLine();
    task();
  },time + 300);
}
