var notifier = require('node-notifier');

process.stdin.on("data", function(input){
  var newdata = input.toString();
  newdata = newdata.trim();
  var opts = {};
  opts['title'] = 'exercise';
  opts['message'] = newdata;
  notifier.notify(opts);
});
