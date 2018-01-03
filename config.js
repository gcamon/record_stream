"use strict";

var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

var session = require('express-session');

var multer = require("multer");

module.exports= function (app) { 
	app.use('/assets',express.static(__dirname + '/public'));
	app.use(session({
	  secret: 'keyboard cat',
	  resave: true,	  
	  saveUninitialized: true,
	  cookie: {
	  	httpOnly: true, 
	  	path: "/",
	  	//maxAge: 3600000 * 72,
	  } //secure: true will be set on the cookie when i this site is on https
	}));	
		
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	app.use(multer({dest: './uploads'}).any());	

	app.set('view engine', 'ejs');
	app.set('views', __dirname + '/views');

}

