describe('InfoCtrl', function() {

	beforeEach(module('testProj1'));

	var scope,ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('InfoCtrl', {$scope: scope});

      scope.setColors();
    }));	

	it('should return colors', inject(function() {
		//scope.setColors();
		expect( scope.getValues()).toContain("red");
	}));

	it('should have a description', inject(function() {
		expect( scope.description).toBeDefined();
	}));

});