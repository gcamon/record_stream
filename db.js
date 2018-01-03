/*
	CREATE TABLE IF NOT EXISTS `files` (
	  `fieldname` varchar(100) NOT NULL,
	  `originalname` varchar(100) NOT NULL,
	  `mimetype` varchar(100) NOT NULL,
	  `destination` varchar(100) NOT NULL,
	  `filename` varchar(100) NOT NULL,
	  `path` varchar(100) NOT NULL,
	  `encoding` varchar(100) NOT NULL,
	  `size` INT NOT NULL,
	  `url` varchar(100) NOT NULL
	);
*/

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'obinna', //use your own username
  password : 'gcamon', // use your own password
  database : 'webrtcsurveillanceDB', //use your database
  multipleStatements: true
});

connection.connect(function(err){
	if(!err) {
	  console.log("Database is connected ... nn");    
	} else {
	  console.log(err);
	  console.log("Error connecting database ... nn"); 
	}
});

module.exports = connection;