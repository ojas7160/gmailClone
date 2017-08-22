app.controller("myctrl", function($scope, factory){
    $scope.init = function(){
         var msg = factory.getlist();
    
       function success(data){
            $scope.list = data;
        }
        function error(error){
            $scope.list = error;
        }
          msg.then(success, error);  
        }
    $scope.show = function(index){
        var p = index.obj;
        var msg = factory[p]();
        
        function success(data){
            $scope.collection = data;
        }
        function error(error){
            $scope.collection = error;
        }
        msg.then(success, error);
    }
});