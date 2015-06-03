"use strict";

import {ComponentAnnotation as Component, ViewAnnotation as View} from 'angular2/angular2';
import List from './list/list';


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

