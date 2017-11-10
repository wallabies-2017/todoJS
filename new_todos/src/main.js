import Vue from 'vue';
import TodoListItem from './components/TodoListItem.vue';
import TodoListSummary from './components/TodoListSummary.vue';
import CreateTodoList from './components/CreateTodoList.vue';
import EditTodoList from './components/EditTodoList.vue';
import TodoItem from './components/TodoItem.vue';
import TodoSummary from './components/TodoSummary.vue';
import AddTodo from './components/AddTodo.vue';
import EditTodo from './components/EditTodo.vue';

import EventBus from './EventBus.js';

import DataStore from './store.js';



Vue.component("todo-list-item", TodoListItem);
Vue.component("todo-list-summary", TodoListSummary);
Vue.component("create-todo-list", CreateTodoList);
Vue.component("edit-todo-list", EditTodoList);
Vue.component("todo-item", TodoItem);
Vue.component("todo-summary", TodoSummary);
Vue.component("add-todo", AddTodo);
Vue.component("edit-todo", EditTodo);

new Vue({
	el: '#app',
	data: {
		privateState: {
			mode: {
				edit: false,
				detail: false
			}
		},
		sharedState: DataStore.state
	},
	methods: {
		createTodoList: function(args){
			DataStore.createTodoList(args);
		}, 
		editTodoList: function(todoList, args){
			DataStore.editTodoList(todoList._id, args);
		},
		editTodo: function(todoList, todo, args){
			DataStore.editTodo(todoList._id, todo._id, args);
		},
		addTodo: function(todoList, args){
			DataStore.addTodo(todoList._id, args);
		}
	},
	mount: function(){
		EventBus.$on("add:todo", this.addTodo);
		EventBus.$on("create:todolist", this.createTodoList);
		EventBus.$on("edit:todo", this.editTodo);
		EventBus.$on("edit:todolist", this.editTodoList);
	}
});
