'use strict';
angular.module("xm").config(['$stateProvider', '$urlRouterProvider', 'apiProvider', '$httpProvider',
function ($stateProvider, $urlRouterProvider,  apiProvider, $httpProvider) {

      //  var server = "http://www.hexodetech.com:8080/";

      
        $urlRouterProvider.otherwise('/xmSignIn');

        $stateProvider
            .state('xmSignIn', {
                url: '/xmSignIn',
                templateUrl: 'templates/xmUser/xmSignIn.html',
                controller: 'xmUserCtrl'
            })
            .state('xmHome', {
                url: '/xmHome',
                templateUrl: 'templates/xmHome/xmHome.html',
                controller: 'xmHomeCtrl'
            })
            .state('xmbeneficiaryList', {
                url: '/xmbeneficiaryList',
                templateUrl: 'templates/xmHome/xmbeneficiaryList.html',
                controller: 'xmBeneficiaryCtrl'
            })
            .state('xmOthers', {
                url: '/xmOthers',
                templateUrl: 'templates/xmHome/xmOthers.html',
                controller: 'xmOtherCtrl'
            })
            .state('xmTransactionList', {
                url: '/xmTransactionList',
                templateUrl: 'templates/xmHome/xmTransactionList.html',
                controller: 'xmTransactionListCtrl'
            })
            .state('xmUserList', {
                url: '/xmUserList',
                templateUrl: 'templates/xmHome/xmUsersList.html',
                controller: 'xmUsersListCtrl'
            })
            
        // apiProvider.setApiUrl(server);
        // apiProvider.setApiHeaders({});



    }
]);