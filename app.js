angular.module('testProj1', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('testProj1').config(function($routeProvider, $locationProvider) {
    
    $routeProvider.when('/',{templateUrl: 'partial/home/home.html'});

    $routeProvider.when('/info',{templateUrl: 'partial/info/info.html'});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});


    $locationProvider.html5Mode(true);
});

angular.module('testProj1').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
