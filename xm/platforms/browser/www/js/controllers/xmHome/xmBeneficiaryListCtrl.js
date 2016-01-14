'use strict';
angular.module("xm.controllers")
    .controller('xmBeneficiaryCtrl', ["$scope", "$state", "$rootScope", "api",
        function ($scope, $state, $rootScope, api) {
		$scope.api = api;
}]);
