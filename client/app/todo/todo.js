"use strict";
import Reflect from 'reflect-metadata';
import {ComponentAnnotation as Component, ViewAnnotation as View, NgFor, InjectAnnotation as Inject} from 'angular2/angular2';
import {List} from '../list/list';



@Component({
	selector: 'my-app',
	appInjector: [List]
})
@View({
	templateUrl: 'app/todo/todo.tmpl.html', 
	directives: [NgFor]
})
class Todo{
	constructor(@Inject(List) l){
		this.title = 'Gym';
		this.list = l;
		
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
