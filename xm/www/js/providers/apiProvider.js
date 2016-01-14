'use strict';
angular.module("xm.providers").provider("api", function apiProvider() {

    this.$get = ['$http', 'settings', 'CONSTANTS',
        function ($http, settings, CONSTANTS) {
            settings.load(function () {});
            var apiClass = {}; {
                apiClass.User = function () {
                    this.id = "";
                    this.name = "";
                    this.username = "";
                    this.email = "";
                    this.dob = "";
                    this.transactions = [];
                    this.getAllTransction = function (callback) {
                        var that = this;
                        $http.get('json/transactions.json').success(function (data) {
                            console.log('received transaction data is ', data);
                            that.transactions = data;
                            (callback || angular.noop)(null, data);
                        }).error(function (error) {
                            (callback || angular.noop)(error, null);
                        });
                    }
                }

                apiClass.User.signIn = function (user, callback) {
                    $http.get('json/users.json').success(function (data) {
                        var tempUser = _.findWhere(data, {
                            userName: user.userName,
                            password: user.password
                        });
                        if (tempUser) {
                            tempUser = angular.extend(new apiClass.User(), tempUser);
                            delete user.password;
                            apiClass.User.currentUser = tempUser;
                            callback(null, tempUser);
                        } else {
                            callback({
                                error: true,
                                errorCode: CONSTANTS.ERROR.INVALID_CREDENTIAL
                            }, null);
                        }
                    }).error(function (error) {
                        callback(error, null);
                    });
                }

                Object.defineProperty(apiClass.User, 'currentUser', {
                    set: function (value) {
                        settings.user = value;
                    },
                    get: function () {
                        return settings.user
                    }
                });
            }
            /*USER CLASS END*/
            return apiClass;
        }
    ]
});