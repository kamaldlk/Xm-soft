'use strict';
angular.module("xm.controllers")
    .controller('xmUserCtrl', ["$scope", "$state", "$rootScope", "CONSTANTS", 'api',
        function ($scope, $state, $rootScope, CONSTANTS, api) {
            $scope.user = {};
            $scope.signIn = function (user) {
                api.User.signIn(user, function (error, user) {
                    if (!error) {
                        user.getAllTransction(function (transactions) {
                            $state.go('xmHome');
                        });
                    } else {
                        $scope.error = error.errorCode;
                    }
                });
            }
    }]);