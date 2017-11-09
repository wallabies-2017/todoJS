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




// var switcharoo new Vue({
//   el: '#transition-components-demo',
//   data: {
//     view: 'v-a'
//   },
//   components: {
//     'v-a': {
//       template: '<div>Component A</div>'
//     },
//     'v-b': {
//       template: '<div>Component B</div>'
//     }
//   }
// })