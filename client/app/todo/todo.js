"use strict";
import Reflect from 'reflect-metadata';
import {ComponentAnnotation as Component, ViewAnnotation as View, NgFor} from 'angular2/angular2';
import List from './list/list';

@Component({
	selector: 'my-app'
})
@View({
	templateUrl: 'app/todo/todo.tmpl.html', 
	directives: [NgFor]
})
class Todo{
	constructor(){
		this.title = 'Gym';
		this.list = [new List()];
		
	}
	
	setTitle(newTitle){
		this.title = newTitle;
	}
	
	addListItem(){
		this.list.push(new List());
		console.log(this.list);
	}
	
	removeListItem(){
		this.list.pop();
	}
	
}

export default Todo;
