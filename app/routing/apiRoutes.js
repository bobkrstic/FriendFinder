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
		friendsData.push(req.body);
		res.json(true);
	});



}
