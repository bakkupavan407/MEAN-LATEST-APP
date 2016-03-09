var myAppServices = angular.module("app.services", []);

myAppServices.factory('orgService', ['$http', function($http) {

    return {
        name: "orgServices on",
        getAllDepartments: function(cb) {
            $http({
                method: 'GET',
                url: '/get/departments'
            }).success(function(data) {
                cb(data);
            }).error(function() {
                alert("error");
            });
        },
        getAllGroups: function(cb) {
            $http({
                method: 'GET',
                url: '/get/groups'
            }).success(function(data) {
                cb(data);
            }).error(function() {
                alert("error");
            });
        },
        getAllEmployees: function(cb) {
            $http({
                method: 'GET',
                url: '/get/employees'
            }).success(function(data) {
                cb(data);
            }).error(function() {
                alert("error");
            });
        }
    }

}]);
