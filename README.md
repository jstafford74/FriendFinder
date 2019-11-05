# FriendFinder -Dating App

## Create dating app that matches user's inputs dynamically using .js data store and fully deployed to heroku

## Part 1: User Survey
- [X]  Survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

## Part 2: Routing
- [X] server.js file should require express and path.

- [X}  htmlRoutes.js file should include two routes:
  - [X] A GET Route to /survey which should display the survey page.
  - [X] A default, catch-all route that leads to home.html which displays the home page.

- [X] apiRoutes.js file should contain two routes:
  - [X] A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  - [X] A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

## Part 3: Data Store
- [X] Application data is stored inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.

{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}


## Part 4: Calculation
- [X] Determine the user's most compatible friend by converting each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).  With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.

Example:

User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

Total Difference: 2 + 1 + 2 = 5

Hint: Use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.  The closest match will be the user with the least amount of difference.



Once you've found the current user's most compatible friend, display the result as a modal pop-up.

The modal should display both the name and picture of the closest match.

