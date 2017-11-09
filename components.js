"use strict";

Vue.config.devtools = true;


Vue.component('todo-list-item', {
	template:'#todo-list-item-template',
	props:{
		todoList: Object
	},
	data: function(){
		return {
			mode: {
				edit: false,
				detail: false
			}
		};
	},
	computed: {
		editMode: function(){
			return this.mode.edit ? "Summary":"Edit";
		},
		detailMode: function(){
			return this.mode.detail ? "Hide":"Detail";
		},
	}
});


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
			this.$emit("create:todolist", {
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
	methods: {
		editTodoList: function(event, name, description){
			this.$emit("edit:todolist", this.todoList, {
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
			this.$emit("add:todo", this.todoList, {
				name: name,
				description: description
			});
		}
	}

});

Vue.component('edit-todo', {
	template: '#edit-todo-template',
	props:{
		todoList: Object,
		todo: Object
	},
	data: function(){
		return {
			name: this.todo.name,
			description: this.todo.description
		};
	},
	methods:{
		editTodo: function(event, name, description){
			this.$emit("edit:todo", this.todoList, this.todo, {
				name: name,
				description: description
			});
		}
	}	
});










