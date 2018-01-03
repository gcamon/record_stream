"use strict";
(function(){		
	var videoElem;
	var caption;
	var splitName;
	var secondSplit;
	var innerDiv;
	
	angular.module("myApp",[])
	.controller("recordService",["$scope","$http", "$filter",function($scope,$http,$filter){
		$scope.filter = {};
		$http.get('/records')
		.success(function(data){
			$scope.records = data;
			createView(data)
		})
		.error(function(err){
			console.log(err)
		})

		var videoFilter;
		var videoContainer;

		$scope.$watch("filter.video",function(newVal,oldVal){
			if(newVal) {
				videoFilter = $filter("filter")($scope.records,$scope.filter.video);
			  createView(videoFilter)
			}
		})

		function createView(data){
			videoContainer = document.getElementById("videoContainer");			
			for(var index = data.length - 1; index >= 0; index--) {
				innerDiv = document.createElement("innerDiv");
				innerDiv.style.display = "inline-block";
				innerDiv.style.width = "25%";
				innerDiv.style.paddingRight = "5px";
				innerDiv.style.border = "1px solid #d9edf7";
				splitName = data[index].originalname.split("-");
				secondSplit = splitName[splitName.length - 1].split(".");
				videoElem = document.createElement("Video");
				caption = document.createElement("h6");
				caption.innerHTML += splitName[splitName.length - 2] + " | " + secondSplit[0];
				caption.style.color = "#fff";
				caption.style.padding = "5px";
				caption.style.backgroundColor = "rgba(0,0,0,0.5)";
				innerDiv.style.textAlign = "center";
				caption.style.cursor = "pointer";
				caption.title = "encoding: " + data[index].encoding + ", " + "mimetype: " + data[index].mimetype + ", " + "size: " + data[index].size + "kb";
				videoElem.src = data[index].path;
				videoElem.controls = true;
				videoElem.autoplay = false;
				videoElem.style.width = "100%";
				innerDiv.appendChild(caption);
				innerDiv.appendChild(videoElem);
				videoContainer.appendChild(innerDiv);				
			}
		}
	}])
})()


/*
var videoContainer = window.document.getElementById("videoContainer");	
	console.log(videoContainer)
	var videoElem;
	var caption;
	var splitName;
	var secondSplit;
	var index = 0;
	angular.module("myApp",[])
	.controller("recordService",["$scope","$http",function($scope,$http){
		$http.get('/records').success(function(data){
			alert("yesss");
			console.log(data);
			$scope.records = data;

			while(data.length > index) {
				splitName = data[index].originalname.split("-");
				secondSplit = splitName[splitName.length - 1].split(".");
				videoElem = document.createElement("Video");
				caption = document.createElement("h6");
				caption.innerHTML += splitName[splitName.length - 2] + " " + secondSplit[0];
				caption.style.color = "#fff";
				caption.style.backgroundColor = "rgba(0,0,0,0.5)";
				caption.style.textAlign = "center"
				videoElem.src = "http://" + data[index].url;
				videoElem.controls = true;
				videoElem.autoplay = false;
				videoContainer.appendChild(caption);
				videoContainer.appendChild(videoElem);
				index++;
			}

		});
	}])

*/