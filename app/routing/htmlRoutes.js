/**
 * HTML Routes
 *@constant {require} path
 */
// =============================================================

const path = require('path');

/**
 * @module app
 */
module.exports = function(app) {

  /**
   * HTML end point for tables
   * @property {promise} tables send user to client/tables.html
   * @callback <response> get requests to api/tables, the app responds by delivering  json formatted data
   */

  app.get('/tables', function(req, res) {
    res.sendFile(path.join(__dirname + '/../../client/tables.html'));
  });

  /**
   * HTML end point for reserve
   * @property {promise} reserve send user to client/reserve.html
   * @callback <response> get requests to api/reserve, the app responds by delivering  json formatted data
   */

  app.get('/reserve', function(req, res) {
    res.sendFile(path.join(__dirname + '/../../client/reserve.html'));
  });

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../../client/home.html'));
  });

  app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname, '../../client/home.html'));
  });

};
