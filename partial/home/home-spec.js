describe('HomeCtrl', function() {

	beforeEach(module('testProj1'));

	var scope,ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('HomeCtrl', {$scope: scope});
    }));	

	it('should contain me', inject(function() {

		expect(1).toEqual(1);
		
	}));

});