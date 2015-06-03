"use strict";
import List from './list/list';
import {bootstrap, Component, Template} from 'angular2/angular2';
@Component({selector: 'todo'});
@Template({
	inline:`<div>hey</div>`
});
class Todo{
	constructor(title){
		this.title = title;
		this.list = [new List('empty')];
		
	}
	
	setTitle(newTitle){
		this.title = newTitle;
	}
	addListItem(){
		this.list.push(new List('empty'));
	}
	removeListItem(){
		this.list.pop();
	}
	
}
export default Todo;
// template logic goes here


