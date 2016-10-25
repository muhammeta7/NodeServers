// * Using the previous example as a guide, create an app that has two web servers.
var http = require('http');
// Declare Ports
var PORT1 = 7000;
var PORT2 = 7500;

var goodArray = [
  'You are really cool!',
  'You are very smart',
  'Your hair is super cool!',
  'You smell like unicorns and rainbows!'
];

var negativeArray = [
  'You smell like stale farts!',
  'I hate your face!',
  'You ugly yeah yeah you ugly!',
  'You need to reanalyze your life because you clearly are not winning!'
];
// * Generate the good / bad phrase randomly from a list of predefined phrases
// one listening on port 7000 will always tell the user something good about themselves.
function goodRequests(request, response){
  var positiveMessage = Math.floor(Math.random()*goodArray.length);
  response.end(goodArray[positiveMessage]);
}
var server1 = http.createServer(goodRequests);
server1.listen(PORT1, function(){
  console.log('Server Listening on: http://localhost:%s', PORT1);
});

// One that listens on port 7000 and one that listens on port 7500.
function badRequests(request, response){
  var negativeMessage = Math.floor(Math.random()*negativeArray.length);
  response.end(negativeArray[negativeMessage]);
}
var server2 = http.createServer(badRequests);
server2.listen(PORT2, function(){
  console.log('Server Listening on: http://localhost:%s', PORT2);
});




// * Make sure you create a Github repo and commit this code!

// ** Bonus **
// * Use the `twitter` package inside the response to also return a random tweet!