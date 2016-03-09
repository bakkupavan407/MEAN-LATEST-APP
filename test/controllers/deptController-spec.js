describe("deptController tests", function() {
    var appCtrl, $rootScope, $scope, orgService;

    beforeEach(module("meanapp"));

    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        orgService = {
            name: "Pavan",
            getAllDepartments: function() {
                $scope.showImage = true;
            },
            getAllGroups: function() {

            },
            getAllEmployees: function() {

            }
        };
        appCtrl = $controller("deptController", { $scope: $scope, orgService: orgService });
    }));

    describe("deptController", function() {
        it("Title should be Departments", function() {
            expect($scope.title).toBe("Departments");
        });
        it("Loader flad should be true", function() {
            expect($scope.showImage).toBe(true);
        });
    });

});
