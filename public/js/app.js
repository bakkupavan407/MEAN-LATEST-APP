var myApp = angular.module("meanapp", ['ui.router', 'app.services']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('/', {
            url: "/",
            templateUrl: "../views/showall.html",
            controller: "myController"
        })
        .state('departments', {
            url: "/departments",
            templateUrl: "../views/departments.html",
            controller: "deptController"
        })
        .state('groups', {
            url: "/groups",
            templateUrl: "../views/groups.html",
            controller: "groupsController"
        })
        .state('employees', {
            url: "/employees",
            templateUrl: "../views/employees.html",
            controller: "employeesController"
        })
});
