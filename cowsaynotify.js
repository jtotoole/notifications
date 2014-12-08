var notifier = require('node-notifier');
var cowsay = require('cowsay');

process.stdin.on("data", function(input){
  var newdata = input.toString();
  newdata = newdata.trim();
  var cowtext = cowsay.say({text:newdata});
  var opts = {};
  opts['title'] = 'exercise';
  opts['message'] = cowtext;
  return notifier.notify(opts);
});
