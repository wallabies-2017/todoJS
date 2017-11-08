"use strict";

Vue.config.devtools = true;

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
	editTodoList: function(todoListId, data){

	},
	addTodo: function(todoListId, data){
		// .....


		this.state.todoLists.push(data);

	},
	editTodo:function(todoListId, todoId, data){

	},
	deleteTodo: function(todoListId, todoId){

	},
	getTodoList: function(todoListId){

	}
};