<template>
	<form v-on:submit.prevent="createTodoList($event, name, description)">
		<label> Name:
			<input type="text" name="name" v-model="name">
		</label>
		<label>	Description:
			<input type="text" name="description" v-model="description">
		</label>	
			<button type="submit">Create Todo List</button>
			
	</form>
</template>


<script>
import EventBus from '../EventBus.js';


export default {
	name: 'create-todo-list',
	data: function(){
		return {
			name:'',
			description:''
		};
	},
	methods:{
		createTodoList: function(event, name, description){
			EventBus.$emit("create:todolist", {
				name: name,
				description: description
			});
			this.$set(this, "name", "");
			this.$set(this, "description", "");
			
		}
	}
}
</script>