// ask 10 questions
// each answer on a scale of 1-5 agree/disagree
// determine the user's most compatible friend
// convert each user's result into a simple array of numbers
// [3,2,6,7,8,9,0,4,7,8]
// compare the diffenrence between current user's scores with
// those from other users q by q
// add app the difference to calculate totalDifference
// use the absolute value of the difference (no - negative numb)
// the closest match will be user with least amount of difference
// once the closest match is found, display the result as a modal pop-up
// modal should display name and image of the match

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
	console.log("Listening on port: " + PORT);
})