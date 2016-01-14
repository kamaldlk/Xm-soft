'use strict';
angular.module("xm.controllers")
    .controller('xmHomeCtrl', ["$scope", "$state", "$rootScope", "api",
        function ($scope, $state, $rootScope, api) {


            $scope.beneficiary = function () {

                $state.go("xmbeneficiaryList");

            };
            $scope.xmOthers = function () {

                $state.go("xmOthers");

            };
            $scope.xmTransactionList = function () {

                $state.go("xmTransactionList");

            }
            $scope.xmUserList = function () {

                $state.go("xmUserList");

            }

            $scope.logout = function () {
                api.User.currentUser = null;
                $state.go('xmSignIn');
            }

}]);