angular.module("bear", []);

angular.module("bear").controller("polarbearcontroller", ["$scope", function($scope){
	$scope.message = "Add another price";
	//$scope.classname="forthehiddenform";
	$scope.price1=0;
	$scope.price2=0;
	$scope.price3=0;
	$scope.price4=0;
	$scope.showthis=false;
	$scope.counter=0;
	$scope.price5=0;
	$scope.showthis1=false;

	
	$scope.Submit = function() {
			//event.preventDefault(); //don't need this - angular does this automatically
		   // $scope.firstname=$scope.price1;
		      $scope.total=Number($scope.price1) + Number($scope.price2) + Number($scope.price3) + Number($scope.price4) + Number($scope.price5) + Number($scope.tax);
    }

    $scope.Show = function() {
		    	//$scope.classname="forthevisibleform"
		    	if ($scope.counter==0)
		    		$scope.showthis=true;
		    	if ($scope.counter==1)
		    		$scope.showthis1=true; 

		    	$scope.counter++;   

    }

}]
);

//I don't know how to bind a color and keep adding fields and then using their inputs 