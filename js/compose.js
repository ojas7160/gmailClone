app.controller("composectrl", function($scope){
   $scope.compose = "Compose a new mail here.."; 
    
 $scope.saved = localStorage.getItem("list");
    
    $scope.list = (localStorage.getItem("list")!==null) ? 
        JSON.parse($scope.saved) : [{subject1 : "Job", done : false}, {subject1 : "complaint", done : false}];
    
    localStorage.setItem("list", JSON.stringify($scope.list));
    
    $scope.addEmail = function(){
        //alert("hi");
        $scope.list.push({subject1 : $scope.emailSubject, done : false});
        localStorage.setItem("list", JSON.stringify($scope.list));
    };
});