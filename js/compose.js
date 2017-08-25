app.controller("composectrl", function($scope){
   $scope.compose = "Compose a new mail here.."; 
    
    if(window){
    document.getElementById("to").value = localStorage.getItem("to");
    document.getElementById("subject").value = localStorage.getItem("subject");
    document.getElementById("body").value = localStorage.getItem("body");
    
    document.getElementById("submit").addEventListener("click", function(){
        var to = document.getElementById("to").value;
        var subject = document.getElementById("subject").value;
        var body= document.getElementById("body").value;
        localStorage.setItem("TO :", to);
        localStorage.setItem("TO :", subject);
        localStorage.setItem("TO :", body);
        
       
    });
    }
    
 /*$scope.saved = localStorage.getItem("list");
    
    $scope.list = (localStorage.getItem("list")!==null) ? 
        JSON.parse($scope.saved) : [{subject1 : "Job", done : false}, {subject1 : "complaint", done : false}];
    
    localStorage.setItem("list", JSON.stringify($scope.list));
    
    $scope.addEmail = function(){
        //alert("hi");
        $scope.list.push({subject1 : $scope.emailSubject, done : false});
        localStorage.setItem("list", JSON.stringify($scope.list));
    };*/
});