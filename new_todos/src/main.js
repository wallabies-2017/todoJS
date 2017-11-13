import Vue from 'vue';
import TodoListItem from './components/TodoListItem.vue';
import TodoListSummary from './components/TodoListSummary.vue';
import CreateTodoList from './components/CreateTodoList.vue';
import EditTodoList from './components/EditTodoList.vue';
import TodoItem from './components/TodoItem.vue';
import TodoSummary from './components/TodoSummary.vue';
import AddTodo from './components/AddTodo.vue';
import EditTodo from './components/EditTodo.vue';

import DataStore from './store.js';



Vue.component("todo-list-item", TodoListItem);
Vue.component("todo-list-summary", TodoListSummary);
Vue.component("create-todo-list", CreateTodoList);
Vue.component("edit-todo-list", EditTodoList);
Vue.component("todo-item", TodoItem);
Vue.component("todo-summary", TodoSummary);
Vue.component("add-todo", AddTodo);
Vue.component("edit-todo", EditTodo);

var app = new Vue({
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
	store: DataStore
});
