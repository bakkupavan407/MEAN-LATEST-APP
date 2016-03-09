describe("myController spec", function() {
    var appCtrl, $rootScope, $scope, orgService;

    beforeEach(module("app.services"));
    beforeEach(module("meanapp"));

    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        orgService = {
            name: "orgServices on",
            getAllDepartments: function() {

            },
            getAllGroups: function() {

            },
            getAllEmployees: function() {

            }
        };
        appCtrl = $controller("myController", { $scope: $scope, orgService: orgService });
    }));

    describe("myController", function() {
        it("Title should be My Controller", function() {
            expect($scope.title).toBe("My Controller");
        });
        it("orgService name should be 'orgService on'", function() {
            expect($scope.namefromservice).toBe("orgServices on");
        });
        it("$scope.allDepts should be empty", function() {
            expect($scope.allDepts).toEqual([]);
        });
        it("$scope.allDepts length should be 3", function() {
            expect($scope.allDepts).toEqual([]);
            $scope.allDepts = [1, 2, 3];
            expect($scope.allDepts.length).toEqual(3);
        });
        
    });

});
