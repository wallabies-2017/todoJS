<template>
	<form v-on:submit.prevent="addTodo($event, name, description)">
		<label> Name:
			<input type="text" name="name" v-model="name">
		</label>
		<label>	Description:
			<input type="text" name="description" v-model="description">
		</label>	
			<button type="submit">Add Todo</button>
			
	</form>
</template>


<script>
import EventBus from '../EventBus.js';

export default {
	name: 'add-todo',
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
			EventBus.$emit("add:todo", this.todoList, {
				name: name,
				description: description
			});
			this.$set(this, "name", "");
			this.$set(this, "description", "");
		}
	}
};
</script>