
"use strict";

Vue.config.devtools = true;

var app = new Vue({
	el: '#app',
	data: {
		privateState: {},
		sharedState: store.state
	},
	methods:{
		createTodo: function(todoListId, config){
			store.addTodo(todoListId, config);
		}	
	}
});

