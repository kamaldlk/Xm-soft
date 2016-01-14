'use strict';
angular.module("xm").config(['$stateProvider', '$urlRouterProvider', 'apiProvider', '$httpProvider',
function ($stateProvider, $urlRouterProvider,  apiProvider, $httpProvider) {

      //  var server = "http://www.hexodetech.com:8080/";

      
        $urlRouterProvider.otherwise('/xmHome');

        $stateProvider
            .state('xmHome', {
                url: '/xmHome',
                templateUrl: 'templates/xmHome/xmHome.html',
                controller: 'xmHomeCtrl'
            })
            
       

        // apiProvider.setApiUrl(server);
        // apiProvider.setApiHeaders({});



    }
]);