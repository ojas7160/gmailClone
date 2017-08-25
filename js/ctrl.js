app.controller("ctrl", function($scope){
 
    $scope.label = localStorage.getItem(label);
    
     var labelhtml = document.getElementById("newlabel");
        var value = localStorage.getItem(label);
        labelhtml.innerHTML = value;
    
    
});