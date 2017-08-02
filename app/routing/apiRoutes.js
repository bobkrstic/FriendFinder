// two routes

// get route with '/api/friends' - to display json of all friends
// post route '/api/friends' - to handle survey results
// this route should also handle compatibility logic

var friendsData = require('../data/friends.js');

module.exports = function(app) {
	app.get('/api/survey', function(req, res) {
		res.json(friendsData);
	});


	app.get('/api/friends', function(req, res){
		res.json(friendsData);
	});


	app.post('/api/survey', function(req, res) {
		var newPerson = req.body;
		var lowestDifferenceIndex = returnMatch(newPerson, friendsData);
		//console.log(lowestDifferenceIndex);
		//console.log("lowesdindex above and the datamatch below.")
		//console.log(friendsData[lowestDifferenceIndex]);
		res.json(friendsData[lowestDifferenceIndex]);
		friendsData.push(req.body);
	});
}


var returnMatch = function (newPerson, friendsData) {

	var userArrayResult = 0;
	for (var u = 0; u < newPerson.scores.length; u++) {
		userArrayResult += parseInt(newPerson.scores[u]);
	}

	var matchArray = [];
	var friendsArrayResult = 0;
	var localResult = 0;


		for (var i = 0; i<friendsData.length; i++) {
			localResult = 0;
			friendsArrayResult = 0;

			for (var j=0; j<10; j++) {
				friendsArrayResult += parseInt(friendsData[i].scores[j]);
			}

			localResult = friendsArrayResult - userArrayResult;
			matchArray.push(localResult);
		}

		var lowestNumber = Math.min.apply(Math, matchArray);

		var indexOfLowest = matchArray.indexOf(lowestNumber);

		return indexOfLowest; 
}



