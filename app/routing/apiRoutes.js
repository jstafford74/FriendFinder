var friendData = require("../data/friends.js");


module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function (req, res) {
    console.log(req.body);
    //Calculate total points for user submission
    var nFpoints = 0;
    for (var i = 0; i < req.body.questionData.length; i++) {
      nFpoints += parseInt(req.body.questionData[i]);
    }


    //Calculate points of matches
    var matchScore = 0;
    var comparisonArray = [];
    for (var i = 0; i < friendData.length; i++) {
      //Grab points array from each potential match
      pointsArray = friendData[i].scores;
      for (var j = 0; j < pointsArray.length; j++) {
        //Calculate total points of each potential match
        matchScore += parseInt(pointsArray[j]);
      }

      //Calculate absolute value of the diff between user and match points
      var compare = Math.abs(nFpoints - matchScore);
      console.log("Difference between " + req.body.name + " and potential match " + friendData[i].name + " is " + compare + " points");
      //Push each difference value into an array
      comparisonArray.push(compare);
      //Reset match points to zero
      matchPoints = 0;
    }

    //Return the minimum of the comparison array
    Array.min = function (array) {
      return Math.min.apply(Math, array);
    };
    var minimum = Array.min(comparisonArray);


    //Find the index number of the minimum value in the comparison array
    var indexNum = comparisonArray.indexOf(minimum);

    //Use indexNum to grab the matching object from the JSON data and fill the response data that will be posted to the survey page
    res.json(friendData[indexNum]);
    friendData.push(req.body);
  });
};