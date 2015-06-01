import Todo from './todo';
describe('Todo list:', function(){
	var todo;
	beforeEach(function(){
		todo = new Todo('Gym');
	});
	
	it('expect Todo to be present', function(){
		expect(todo).not.toBe(null);
    });
	
	it('expect Todo constructor to accept a title', function(){
		 expect(todo.title).toEqual('Gym');
    });
	
	it('expect Todo List property to be Present', function(){
		expect(todo.list).not.toBe(null);
    })
	
	it('expect Todo List property to accept a title:empty', function(){
		
		 expect(todo.list[0].title).toEqual('empty');
    });
	
	it('expect Todo Title property to accept a title change', function(){
		 todo.setTitle('Work');
		 expect(todo.title).toEqual('Work');
    });
	
	it('expect Todo List property to have an add function', function(){
		 todo.addListItem();
		 expect(todo.list.length).toEqual(2);
    });
	
	it('expect Todo to have a remove function', function(){
		 todo.removeListItem();
		 expect(todo.list.length).toEqual(0);
	})
	
});