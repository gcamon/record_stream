"use strict";

module.exports = function(app,db) {
	app.get("/",function(req,res){
		res.render("index");
	})

	app.get("/records",function(req,res){
		
	  var sql = "SELECT * FROM files"
		db.query(sql,function(err,result){		
			if(err) throw err;
			if(result && result.length > 0) {				
				res.send(result);
			} else {
				res.send([]);
			}
		})
	});

	app.get("/uploads/:id",function(req,res){
		
		var file = __dirname + "/uploads/" + req.params.id;
    res.download(file); // S
	})

	app.post("/uploadFile",function(req,res){
		
		req.files[0].url = req.headers.host + "/uploads/" + req.files[0].filename;		
  	
  	db.query('INSERT INTO files SET ?', req.files[0], function(err, result) {	
      if(err) throw err;
      if(result) {         
         res.send(req.files[0]);
         //db.end();
      } else {
        res.end({message: "error occured! File not saved."})
      }
    });

	});

}