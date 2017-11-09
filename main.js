
"use strict";

Vue.config.devtools = true;

var app = new Vue({
	el: '#app',
	data: {
		privateState: {
			mode: {
				edit: false,
				detail: false
			}
		},
		sharedState: store.state
	},
	methods: {
		createTodoList: function(args){
			store.createTodoList(args);
		}, 
		editTodoList: function(todoList, args){
			store.editTodoList(todoList._id, args);
		},
		editTodo: function(todoList, todo, args){
			store.editTodo(todoList._id, todo._id, args);
		},
		addTodo: function(todoList, args){
			store.addTodo(todoList, todo, args);
		}
	},
	computed: {
		actionText: function(){
			return this.privateState.mode.edit ? "Summary":"Edit";
		}
	}
});

