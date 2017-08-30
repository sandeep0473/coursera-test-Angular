(function(){
	'use strict';

	angular.module('MyApp',[])

	.controller('MyController',function($scope){
        

        $scope.check   = function(){
        	var msg;
            var list       = $scope.menu;
            $scope.custom  = {};
            //console.log(list);return false;
            if(list === undefined || list === null){

		          msg                       =  "Please enter data first";
		          $scope.custom.style       =  {"color":"red"};
		          $scope.custom.borderStyle =  {"border-color":"red"};
		      
		     }else{

            	  list    = list.split(',');
            	  
            	  list    = list.filter(function(value){
                     if(value != null || value != undefined){
                        return value;
                     }
            	  });
                  
                  //console.log(list);return false;
		          if(list.length <= 3){
		           	 msg  = "Enjoy!";
		          }
                  else if(list.length > 3){
		             msg  = "Too much!";
		          }

                  $scope.custom.style = {"color":"green"};
                  $scope.custom.borderStyle = {"border-color":"green"};
            }

            $scope.message = msg;

        };

	});

})();