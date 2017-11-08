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

	},
	deleteTodo: function(todoListId, todoId){

	},
};

