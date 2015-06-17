"use strict";
import Reflect from 'reflect-metadata';
import {ComponentAnnotation as Component, ViewAnnotation as View} from 'angular2/angular2';
import List from './list/list';

@Component({selector: 'my-app'})
@View({template: `<h1>{{title}}</h1>`})
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
	}
	removeListItem(){
		this.list.pop();
	}
	
}

export default Todo;
