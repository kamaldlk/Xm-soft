'use strict';
angular.module("xm.providers").provider("api", function apiProvider() {

    this.$get = ['$http', 'settings', 'CONSTANTS',
        function ($http, settings, CONSTANTS) {
            settings.load(function () {});
            var apiClass = {};


            {
                /*USER Class starts*/
                apiClass.User = function () {
                    var that = this;
                    this.id = "";
                    this.name = "";
                    this.username = "";
                    this.email = "";
                    this.dob = "";
                    this.place = "";
                    this.transactions = [];
                    this.beneficiaries = [];
                    this.allUsers = [];
                    this.getAllTransction = function (callback) {
                        $http.get('json/transactions.json').success(function (data) {
                            console.log('received transaction data is ', data);
                            that.transactions = data;
                            (callback || angular.noop)(null, data);
                        }).error(function (error) {
                            (callback || angular.noop)(error, null);
                        });
                    };
                    this.getAllBeneficiary = function () {
                        $http.get('json/beneficiary.json').success(function (data) {
                            console.log('all beneificiary data ', data);
                            that.beneficiaries = data;
                        }).error(function (error) {
                            console.log('error in getting beneficiary ', error);
                        });
                    };
                    this.getAllUsers = function () {
                        $http.get('json/usersList.json').success(function (data) {
                            _.each(data, function (user) {
                                that.allUsers.push(angular.extend(new apiClass.User(), user));
                            });
                        }).error(function (error) {
                            console.log('error in getting userList ', error);
                        })
                    };
                };

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