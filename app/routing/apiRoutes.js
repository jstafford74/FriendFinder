/**
 * @param {object} tableData is the reservation information provided on input form
 * @param {object} waitData is the reservation information if length of tableData is greater than 5
 */

const tableData = require('../data/tableData.js');
const waitData = require('../data/waitinglistData.js');

/**
 * @module app
 */
module.exports = function(app) {

  /**
   * Server end point for tables
   * @param {object} tableData json formatted tableData
   * @callback <response> get requests to api/tables, the app responds by delivering  json formatted data
   */

  app.get('/api/tables', function(req, res) {
    res.json(tableData);
  });


  /**
   * Server end point for waitlist
   * @param {object} waitData json formatted waitListData
   * @callback <response> get requests to api/waitList, the app responds by delivering json formatted data
   *
   */

  app.get('/api/waitlist', function(req, res) {
    res.json(waitData);
  });

  /**
   * posts to api/tables
   * @param {object} tableData data delivered from input form and tested
   * @callback <request,response> posts push the requests to appropriate data array and responds with boolean value if threshold is or is not met
   *
   */

  app.post('/api/tables', function(req, res) {
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    } else {
      waitData.push(req.body);
      res.json(false);
    }
  });

  /**
 * api/clear to eliminate existing data in arrays
 * @function
 *
 */

  app.post('/api/clear', function() {
    tableData = [];
    waitData = [];

    console.log(tableData);
    console.log(waitData);
  });
};
