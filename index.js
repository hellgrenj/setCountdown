/*jshint node:true */
"use strict";

if (parseInt(process.version.substr(1, 1)) > 3) {
    var readline = require('readline');
    process.stdout.clearLine = function() {
        readline.clearLine(process.stdout);
        process.stdout.write('');
    };
}

exports.setCountdown = function(task, waitTime, token, countDownInterval) {
    if (!countDownInterval) {
        countDownInterval = 1000; // 1 second
    }
    var numberOfCounts = Math.floor(waitTime / countDownInterval);
    if (numberOfCounts > 1) {
        for (var i = numberOfCounts; i >= 0; i--) {
            if (i == numberOfCounts) {
                execute(waitTime, task);
            } else {
                countDown(i * countDownInterval, numberOfCounts - i, token);
            }
        }
    } else {
        execute(0, task); // execute right away!
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
