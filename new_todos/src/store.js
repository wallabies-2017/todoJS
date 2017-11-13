"use strict";
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	debug: true,
	state: {
		todoLists: [],
	},
	mutations: {
		createTodoList: function(state, payload){
			this.state.todoLists.push(payload);
		},
		editTodoList: function(state, payload){
			if (payload.data.hasOwnProperty('name')){
				Vue.set(payload.obj, 'name', payload.data.name);
			}
	
			if (payload.data.hasOwnProperty('description')){
				Vue.set(payload.obj, 'description', payload.data.description);
			}
		},
		addTodo: function(state, payload){
			payload.obj.todos.push(payload.data);
		},
		editTodo: function(state, payload){
			if (payload.data.hasOwnProperty('name')){
				Vue.set(payload.obj, 'name', payload.data.name);
			}
	
			if (payload.data.hasOwnProperty('description')){
				Vue.set(payload.obj, 'description', payload.data.description);
			}
		},
		
		deleteTodo: function(state, payload){
			_.remove(payload.obj.todos, function(value){
				return value._id === payload.target;
			});
		}
	},
	actions: {
		createTodoList: function(context, payload){
			var baseTodoList = {
				_id: +(new Date()), 
				name: null, 
				description: null, 
				todos:[]
			};
			context.commit("createTodoList", Object.assign(baseTodoList, payload));
		},
		editTodoList: function(context, payload){
			var todoList = context.getters.getTodoList(payload.todoList._id);
			if (!todoList){
				return false;
			}
			var cleanedData = {};
			if (payload.data.hasOwnProperty('name')){
				cleanedData.name = payload.data.name;
			}
	
			if (payload.data.hasOwnProperty('description')){
				cleanedData.description = payload.data.description;
			}

			if (cleanedData){
				context.commit("editTodoList", {
					obj: todoList,
					data: cleanedData
				});
				return true;
			}

			return false;
	
		},	
		addTodo: function(context, payload){
			var todoList = context.getters.getTodoList(payload.todoList._id);
			if (!todoList){
				return false;
			}
			var baseTodo = {
				_id: +(new Date()), 
				name: null, 
				description: null,
				isComplete: false
			};

			context.commit("addTodo", {
				obj: todoList,
				data: Object.assign(baseTodo, payload.data)
			});
			return true;
	
	
		},
		editTodo: function(context, payload){
			var todo = context.getters.getTodo(payload.todoList._id, payload.todo._id);
			if (!todo){
				return false;
			}
	
			var cleanedData = {};
			if (payload.data.hasOwnProperty('name')){
				cleanedData.name = payload.data.name;
			}
	
			if (payload.data.hasOwnProperty('description')){
				cleanedData.description = payload.data.description;
			}

			if (cleanedData){			
				context.commit("editTodo", {
					obj: todo,
					data: cleanedData
				});
			}
	
		},
		
		deleteTodo: function(context, payload){
			var todoList = context.getters.getTodoList(payload.todoList._id)
	
			if (!todoList){
				return false;
			}

			context.commit("deleteTodo", {
				obj: todoList,
				target: payload.todo._id
			});
		}
	},
	getters: {
		getTodoList: function(state, getters){
			return function(todoListId){
				var viewTodoList = state.todoLists;
				return viewTodoList.find(function(element){
					if (element._id === todoListId){
						return element;
					}
				});
			};
		},
		getTodo: function(state, getters){
			return function(todoListId, todoId){
				var todoList = getters.getTodoList(todoListId);
				if (todoList){
					return todoList.todos.find(function(element){
						if (element._id === todoId){
							return element;
						}
					});
				}
			};
		},
	}
});

export default store;