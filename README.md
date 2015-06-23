Install
-------

# npm install -g jsmp
# npm install -g live-server 
# npm install
# npm start
# npm test

Build yourself
--------------

>Technologies:

> - ES6
> - Karma
> - Jasmine
> - Web Components
> - JSPM
> - Node
> - Git
> - Phantom

Step 1:
-----------
**Getting started:**

 > Clone the `Hit-the-gym` repo on Github
 >> Clone git@github.com:matthewharwood/Hit-the-gym.git

 >Start code editor
 >> code .

> Install Packages
>> `npm install jspm -g --save`
>> `jspm init` (press enter 100s times)
>>` npm install -g live-server`

Add scripts to anywhere in the `Package.json` object:

	"scripts": {
	    "postinstall": "jspm install",
	    "start": "live-server --open=client/index.html --port=9090 ./"
	  },
 
 ------
 
Create the folder structure:
`mkdir client && cd !$`
`mkdir app`
inside the `client/app`
`touch index.html`

 
----------

Edit the index file to test the `npm start`
>add boilerplate to `index.html`
		`<html>
			<head></head>
			<body>
				<h1>Hey World</h1>
			</body>
		</html>`

 Start the Server
 
Return to base directory (should be be 1 back)`cd ..`
Run: `npm start` from console.

-------

Install the Testing Framework Packages:
   `  "devDependencies": {
    "jasmine-core": "^2.3.4",
    "jspm": "^0.15.6",
    "karma": "^0.12.35",
    "karma-chrome-launcher": "^0.1.12",
    "karma-coverage": "^0.3.1",
    "karma-jasmine": "^0.3.5",
    "karma-jspm": "^1.1.5",
    "karma-phantomjs-launcher": "^0.2.0",
    "phantomjs": "^1.9.17"
  }`

Initialize the Testing Framework:
`karma init` (press enter 100 times)
replace `frameworks:[],file:[],`
         
    frameworks: ['jspm', 'jasmine'],


    // list of files / patterns to load in the browser
     jspm: {
        loadFiles: [
            'client/app/**/*.js'
        ]
    },

    	
    plugins:[
            'karma-jasmine',
            'karma-coverage',
            'karma-jspm',
            'karma-chrome-launcher'
        ],

------
Make a todo module:
`cd client`
`mkdir todo`
`touch todo.js`

	"use strict";
		class Todo{
		constructor(name){
		 this.name = name;
		}
	}
	export default Todo;
Make a todo.spec.js
`touch todo.spec.js`
Open `todo.spec.js` and paste:

	import Todo from './todo';
	describe('es6 main should eval:', function(){
		var todo;
		
		beforeEach(function(){
			todo = new Todo('Gym');
		});
		
		it('expect Todo to be present', function(){
			expect(todo).not.toBe(null);
	    });.
	});

Step 2
-----------
**Write your first meaningful test:**
> Written with [StackEdit](https://stackedit.io/).


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

Lets make the `List Class`

`cd client/app/todo`
`mkdir list`
`touch list.js`

**list.js**

	"use strict";
	class List{
		constructor(title){
			this.title = title;
		}
	}
	export default List;

So a Todo Class Has a list item so lets compose the Todo Class to have the List Class.
> import a list at the top of your todo.js import list.
> - `import List from './list/list';`

	"use strict";
	import List from './list/list';
	
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

> Add template logic to index.html
> 
		<script src="../jspm_packages/system.js"></script>
		<script src="../config.js"></script>
		<script>
			System.import('client/index').catch(console.log.bind(console));
		</script>

>create index.js next to index.html
> `touch index.js`

open up `index.js` and add:

	import List from './app/todo/todo';

Open up your `todo.js` add template logic:

	// template logic goes here
	var todoEl = document.querySelector('.todo');
	console.log(todoEl);

Open up `index.html` add selected element

	<div class="todo">Hey I'm a todo app</div>

Create Shadow Dom elements to populate.




