const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// app.get("/", function(req, res){
// 	res.send("Hello World");
// });



app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

require('./server/routes/apiRoutes.js')(app);
require('./server/routes/htmlRoutes.js')(app);


app.listen(PORT, function() {
  console.log('Listening on port: ' + PORT);
});
