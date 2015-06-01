import Todo from './todo';
describe('es6 main should eval:', function(){
	var todo;
	
	beforeEach(function(){
		todo = new Todo('Gym');
	});
	
	it('expect Todo name to be present', function(){
		expect(todo).not.toBe(null);
    });
	
});