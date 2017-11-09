<template>
	<form v-on:submit.prevent="editTodo($event, name, description)">
		<label> Name:
			<input type="text" name="name" v-model="name">
		</label>
		<label>	Description:
			<input type="text" name="description" v-model="description">
		</label>	
			<button type="submit">Edit Todo </button>
	</form>
</template>

<script>
export default {
	name: 'edit-todo',
	props:{
		todoList: Object,
		todo: Object
	},
	data: function(){
		return {
			name: this.todo.name,
			description: this.todo.description
		};
	},
	methods:{
		editTodo: function(event, name, description){
			this.$emit("edit:todo", this.todoList, this.todo, {
				name: name,
				description: description
			});
		}
	}
};
</script>