// two routes

// get route with '/api/friends' - to display json of all friends
// post route '/api/friends' - to handle survey results
// this route should also handle compatibility logic

var friendsData = require('../data/friends.js');

module.exports = function(app) {
	app.get('/api/survey', function(req, res) {
		res.json(friendsData);
	});

	app.post('/api/survey', function(req, res) {

		//console.log(req.body);
		//console.log("this above is request below is friendsData");
		// console.log(res);
		//console.log(friendsData);

		var newPerson = req.body;
		//console.log(newPerson);
		var lowestDifferenceIndex = returnMatch(newPerson, friendsData);

		//returnMatch(newPerson, friendsData);
		console.log(lowestDifferenceIndex);
		console.log("lowesdindex above and the datamatch below.")
		console.log(friendsData[lowestDifferenceIndex]);

		res.json(friendsData[lowestDifferenceIndex]);
		friendsData.push(req.body);
		
	});



}


var returnMatch = function (newPerson, friendsData) {

	var userArrayResult = 0;
	for (var u = 0; u < newPerson.scores.length; u++) {
		userArrayResult += parseInt(newPerson.scores[u]);
	}

	//console.log("userArrayResult: " + userArrayResult);


	//console.log("Friends array below: ");
	//console.log(friendsData);
	var matchArray = [];
	var friendsArrayResult = 0;
	// var userArrayResult = 0;
	var localResult = 0;

	//console.log("This is start matchArray: " + matchArray);


		for (var i = 0; i<friendsData.length; i++) {
			localResult = 0;
			friendsArrayResult = 0;
			// userArrayResult = 0;
			//console.log("mathc array 2: " + matchArray);
			//console.log(friendsArray[i].scores);
			for (var j=0; j<10; j++) {
				//console.log("match array 3: " + matchArray);
				friendsArrayResult += parseInt(friendsData[i].scores[j]);
				// userArrayResult += parseInt(userData.scores[j]);
			}

			localResult = friendsArrayResult - userArrayResult;
			matchArray.push(localResult);
			//console.log("matchArray after push: " + matchArray);
		}

		var lowestNumber = Math.min.apply(Math, matchArray);

		//console.log("Lowest in matchArray: " + lowestNumber);
		var indexOfLowest = matchArray.indexOf(lowestNumber);

		//console.log("Index of lowest: " + indexOfLowest);

		// here i will sort matchArray and pick the lowest number which would be at position 0
					
		//console.log("This is match array with results: " + matchArray);

		//console.log("This is friends array at 0: ")
		//console.log(friendsArray[indexOfLowest]);
		return indexOfLowest; 

}



