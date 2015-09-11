angular.module("bear", []);

angular.module("bear").controller("polarbearcontroller", ["$scope", function($scope){
	$scope.message = "Add another price";
	//$scope.classname="forthehiddenform";
	$scope.prices=[{amt:0}]
	$scope.showthis=false;
	$scope.counter=0;
	$scope.showthis1=false;

	
	$scope.Submit = function() {
			//event.preventDefault(); //don't need this - angular does this automatically
		   for (var i; i<prices.length; i++){
		   	    if ($scope.prices[i].amt!="null")
					$scope.total+=Number($scope.prices[i].amt) + Number($scope.tax);
		   }
    }

    $scope.Show = function() {
		    	//$scope.classname="forthevisibleform"
		    	if ($scope.counter==0)
		    		$scope.showthis=true;
		    	if ($scope.counter==1)
		    		$scope.showthis1=true; 

		    	$scope.counter++;  
		    	$scope.prices.push({amt:0}); 

    }

}]
);

//I don't know how to bind a color and keep adding fields and then using their inputs 