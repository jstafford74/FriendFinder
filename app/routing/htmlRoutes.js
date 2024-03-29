/**
 * HTML Routes
 *@constant {require} path
 */
// =============================================================

const path = require('path');

/**
 * @module app
 */
module.exports = function (app) {
  app.get("/home", function (req, res) {

    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // If no matching route is found default to home
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
}; 
