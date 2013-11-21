'use strict';

/* Controllers */
var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller('AccordionDemoCtrl', ['$scope',
  function($scope) {
    	$scope.oneAtATime = true;

		  $scope.groups = [
		    {
		      title: "Dynamic Group Header - 1",
		      content: "Dynamic Group Body - 1"
		    },
		    {
		      title: "Dynamic Group Header - 2",
		      content: "Dynamic Group Body - 2"
		    }
		  ];
		
		  $scope.items = ['Item 1', 'Item 2', 'Item 3'];
		
		  $scope.addItem = function() {
		    var newItemNo = $scope.items.length + 1;
		    $scope.items.push('Item ' + newItemNo);
		  };
  }]);
 
myAppControllers.controller('CarouselDemoCtrl', ['$scope',
  function($scope) {
  	$scope.myInterval = 5000;
	  var slides = $scope.slides = [];
	  $scope.addSlide = function() {
	    var newWidth = 200 + ((slides.length + (25 * slides.length)) % 150);
	    slides.push({
	      image: 'http://placekitten.com/' + newWidth + '/200',
	      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
	        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
	    });
	  };
	  for (var i=0; i<4; i++) {
	    $scope.addSlide();
	  }	
  }]);  
    
  