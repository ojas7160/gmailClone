app.config(function($routeProvider){
   $routeProvider.when("/inbox", {templateUrl:"inbox.html",
                            controller:"inboxctrl"}).
   when("/hr",{templateUrl:"hr.html",
       controller:"hrctrl"}).
   when("/add",{templateUrl:"add.html",
       controller:"addctrl"}).
   when("/compose",{templateUrl:"compose.html",
       controller:"composectrl"}).
   when("/exception",{templateUrl:"exception.html",
       controller:"exceptionctrl"}).
   otherwise({template:"Error", redirectTo:"/inbox"});
           
});