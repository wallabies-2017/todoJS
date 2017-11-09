"use strict";


var store = {
	debug: true,
	state: {
		todoLists: [],
	},
	createTodoList: function(data){
		var baseTodoList = {
			_id: +(new Date()), 
			name: null, 
			description: null, 
			todos:[]
		};

		this.state.todoLists.push(Object.assign(baseTodoList, data));
	},
	getTodoList: function(todoListId){
		var viewTodoList = this.state.todoLists;
		return viewTodoList.find(function(element){
			if (element._id === todoListId){
				return element;
			}
		});
	},
	editTodoList: function(todoListId, data){
		var todoList = this.getTodoList(todoListId);
		if (!todoList){
			return false;
		}

		if (data.hasOwnProperty('name')){
			Vue.set(todoList, 'name', data.name);
		}

		if (data.hasOwnProperty('description')){
			Vue.set(todoList, 'description', data.description);
		}
		return true;

	},

	deleteTodoList: function(todoListId, data){
		var todoList = this.getTodoList(todoListId);
		if (!todoList){
			return false;
		}




	getTodo: function(todoListId, todoId){
		var todoList = this.getTodoList(todoListId);
		if (todoList){
			return todoList.todos.find(function(element){
				if (element._id === todoId){
					return element;
				}
			});
		}
		
	},	
	addTodo: function(todoListId, data){
		var todoList = this.getTodoList(todoListId);
		if (!todoList){
			return false;
		}
		var baseTodo = {
			_id: +(new Date()), 
			name: null, 
			description: null,
			isComplete: false
		};		

		todoList.todos.push(Object.assign(baseTodo, data));
		return true;

	},
	editTodo:function(todoListId, todoId, data){
		var todo = this.getTodo(todoListId, todoId);
		if (!todo){
			return false;
		}


		if (data.hasOwnProperty('name')){
			Vue.set(todo, 'name', data.name);
		}

		if (data.hasOwnProperty('description')){
			Vue.set(todo, 'description', data.description);
		}
		return true;

	},
	
	deleteTodo: function(todoListId, todoId){
		var todo = this.getTodo(todoListId, todoId); 
		if (!todo){
			return false;
		}



	},
};


