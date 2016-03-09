describe("groupsController tests", function() {
    var appCtrl, $rootScope, $scope;

    beforeEach(module("meanapp"));

    beforeEach(inject(function($rootScope, $controller) {
    	$scope = $rootScope.$new();
        appCtrl = $controller("groupsController", {$scope: $scope});
    }));

    describe("groupsController", function() {
        it("Title should be Groups", function() {
            expect($scope.title).toBe("Groups");
        });
    });

});
