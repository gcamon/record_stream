"use strict";

var express = require('express'),      
  config = require('./config'),    
  route = require('./route'),
  db = require('./db'),
 
  app = express(),  
  
  port = process.env.PORT || 4000;

app.listen(port,function(){
  console.log('listening on *:' + port);
});

config(app);

route(app,db); 
