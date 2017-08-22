app.factory("hrFactory", function($http, $q){
    
    var hrjson = function(){
        var d = $q.defer();
        $http.get("../json/hr.json").success(function(data){
            d.resolve(data);
        }).error(function(error){
          d.reject(error);  
        });
        return d.promise;
    };
    return {"hrjson" : hrjson};
});