<template>
	<form v-on:submit.prevent="editTodoList($event, name, description)">
		<label> Name:
			<input type="text" name="name" v-model="name">
		</label>
		<label>	Description:
			<input type="text" name="description" v-model="description">
		</label>	
			<button type="submit">Edit Todo List</button>
			
	</form>
</template>


<script>
export default {
	name: 'edit-todo-list',
	props:{
		todoList: Object
	},
	data: function(){
		return {
			name: this.todoList.name,
			description: this.todoList.description
		};
	},
	methods: {
		editTodoList: function(event, name, description){
			console.log(arguments);
			this.$emit("edit:todolist", this.todoList, {
				name: name,
				description: description
			});
		}
	}
};
</script>