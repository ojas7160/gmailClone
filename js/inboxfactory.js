app.factory("inboxFactory", function($http, $q){
   
       var inboxjson = function(){
            var d = $q.defer();
            $http.get("../json/inbox.json").success(function(data){
                d.resolve(data);
            }).error(function(error){
                d.reject(error);
            });
            return d.promise;
        };
        return {"inboxjson":inboxjson};
    
});