"use strict";

Vue.config.devtools = true;

Vue.component('todo-list-summary', {
	template:'#todo-list-summary-template',
	props:{
		todoList: Object
	}
});

Vue.component('create-todo-list', {
	template: '#create-todo-list-template',
	data: function(){
		return {
			name:'',
			description:''
		};
	},
	methods:{
		createTodoList: function(event, name, description){
			store.createTodoList({
				name: name,
				description: description
			});
			
		}
	}
});

Vue.component('edit-todo-list', {
	template: '#edit-todo-list-template',
	props:{
		todoList: Object
	},
	data: function(){
		return {
			name: this.todoList.name,
			description: this.todoList.description
		};
	},
	methods:{
		editTodoList: function(event, name, description){
			store.editTodoList(this.todoList._id, {
				name: name,
				description: description
			});
		}
	}
});

Vue.component('todo-summary', {
	template: '#todo-summary-template',
	props:{
		todo: Object
	}
});

Vue.component('add-todo', {
	template: '#add-todo-template',
	props:{
		todoList: Object
	},
	data: function(){
		return {
			name:'',
			description:''
		};
	},
	methods:{
		addTodo: function(event, name, description){
			store.addTodo(this.todoList._id, {
				name: name,
				description: description
			});
			
		}
	}

});










