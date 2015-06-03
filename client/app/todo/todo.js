import {ComponentAnnotation as Component, ViewAnnotation as View} from 'angular2/angular2';
"use strict";
//import List from './list/list';
//import {bootstrap, Component, Template} from 'angular2/angular2';
//@Component({selector: 'todo'});
//@Template({
//	inline:`<div>hey</div>`
//});
//class Todo{
//	constructor(title){
//		this.title = title;
//		this.list = [new List('empty')];
//		
//	}
//	
//	setTitle(newTitle){
//		this.title = newTitle;
//	}
//	addListItem(){
//		this.list.push(new List('empty'));
//	}
//	removeListItem(){
//		this.list.pop();
//	}
//	
//}
//
//// template logic goes here
//
//

//@Component({selector: 'my-app'});
//@View({template: `<h1>{{message}}</h1>`});

@Component({selector: 'my-app'})
@View({template: `<h1>boop</h1>`})
class Todo {
  constructor() {
    this.title = 'empty';
    this.list = [];
  }
  setTitle(newTitle){
	  this.message = newTitle;
  }
  addListItem(){
		this.list.push(new List('empty'));
	}
	removeListItem(){
		this.list.pop();
	}
}

export default Todo;

