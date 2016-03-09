describe("employeesController tests", function() {
    var appCtrl, $rootScope, $scope;

    beforeEach(module("meanapp"));

    beforeEach(inject(function($rootScope, $controller) {
    	$scope = $rootScope.$new();
        appCtrl = $controller("employeesController", {$scope: $scope});
    }));

    describe("employeesController", function() {
        it("Title should be Employees", function() {
            expect($scope.title).toBe("Employees");
        });
    });

});
