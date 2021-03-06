
import Todo from './app/todo/todo';



//events.js
var events = (function(){
	var makeTodo = document.querySelector('#make-todolist');
	var makeNewItem = document.querySelector('#make-new-item');
	var todoContainer = document.querySelector('.todo-container');
	var todoItemContainer = document.querySelector('.todo-item-container');
	var count = 0;
	
	var listCollection = undefined;
	
	//this event will make the todo list.
	makeTodo.addEventListener('click', function(){
		listCollection = new Todo("Gym");
		console.log(listCollection);
		todoContainer.innerHTML = listCollection.title;
	});
	
	//this event will make the todo item.
	makeNewItem.addEventListener('click', function(){
		if (!listCollection){ alert('must create a todo list first'); return;}	
		listCollection.addListItem();
		var para = document.createElement("p");
		var node = document.createTextNode(listCollection.list[count].title);
		para.appendChild(node);
		todoItemContainer.appendChild(para);
		count++;
	});
})(Todo);

