"use strict";

Vue.config.devtools = true;

Vue.component('todo-list-summary', {
	template:'#todo-list-summary-template',
	props:{
		todoList: Object
	},
	methods: {

	}
});