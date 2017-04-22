(function () {
    'use strict';
    //TODDO IMPL state provvider
    angular.module('app')
        .config([ '$locationProvider', '$stateProvider', '$urlRouterProvider', function ( $locationProvider, $stateProvider, $urlRouterProvider ) {
            $urlRouterProvider.otherwise('/login');
            $stateProvider
                .state("login", {
                    url: "/login",
                    views:{
                        "content": {templateUrl:"app/login/login.html", controller: "logInController"}
                    }
                });
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: true
            });
        }])
        .run(runApp);

    runApp.$inject = ['$rootScope', '$state'];

        function runApp($rootScope, $state) {
            // $rootScope.$on('$stateChangeStart', function (event, next) {
            //   $state.go('login');
            // });
        }
})();