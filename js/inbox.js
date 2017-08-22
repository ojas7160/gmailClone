app.controller("inboxctrl", function($scope, inboxFactory){
    
   $scope.inbox = "This is inbox";
    
    var msg = inboxFactory.inboxjson();
    function success(data)
    {
        
        $scope.list = data;
    }
    function error(error){
        $scope.error = error;
    } 
    msg.then(success, error);
});