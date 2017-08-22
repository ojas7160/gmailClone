app.controller("hrctrl", function($scope, hrFactory){
   $scope.hr = "This is hr"; 
    
    var msg = hrFactory.hrjson();
    
    function success(data){
        $scope.lists = data;
    }
    function error(error){
        $scope.error = error;
    }
    
    msg.then(success, error);
});