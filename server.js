const express = require('express');

const path = require('path');

const app = express();
const PORT = 3000;

// app.get("/", function(req, res){
// 	res.send("Hello World");
// });



app.use(express.urlencoded({extended: true}));

app.use(express.json());

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


app.listen(PORT, function() {
  console.log('Listening on port: ' + PORT);
  
});
