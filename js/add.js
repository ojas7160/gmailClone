app.controller("addctrl", function($scope){
   $scope.add = "Add here.."; 
    
     $scope.saved = localStorage.getItem("label");
    
    $scope.label = (localStorage.getItem("label")!==null) ? 
        JSON.parse($scope.saved) : [{text : "Job", done : false}, {text : "complaint", done : false}];
    
    localStorage.setItem("label", JSON.stringify($scope.label));
    
    $scope.addLabel = function(){
       //alert("hii");
        $scope.label.push({text : $scope.labelAdd, done : false});
        localStorage.setItem("label", JSON.stringify($scope.label));
    };
    
});