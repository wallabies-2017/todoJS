var app = new Vue({
	el: '#app'
	data: {
		sharedState: store.state,
		privateState: {}
	},
	methods: {
		createTodo: function(todoListId, config){
			store.addTodo(todoListId, config);
		}
	}
})