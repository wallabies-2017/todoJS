import Vue from 'vue'
import TodoListItem from './TodoListItem.vue'
import TodoListSummary from './TodoListSummary.vue'
import CreateTodoList from './CreateTodoList.vue'
import EditTodoList from './EditTodoList.vue'
import TodoItem from './TodoItem.vue'
import TodoSummary from './TodoSummary.vue'
import AddTodo from './AddTodo.vue'
import EditTodo from './EditTodo.vue'

import DataStore from './store.js'



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
	}
})
