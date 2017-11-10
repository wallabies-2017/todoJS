<template>
	<div>
		<todo-summary 
			v-if="!mode.edit"
			v-bind:todo="todo"
		>
		</todo-summary>

		<edit-todo 
			v-if="mode.edit"
			v-bind:todo-list="todoList" 
			v-bind:todo="todo"
		>
		</edit-todo>
		<button 
			v-bind:key="todoList._id"
			v-on:click="mode.edit = !mode.edit" 
		>
			{{ editMode }}
		</button>
	
	</div>
</template>


<script>
export default {
	name: 'todo-item',
	props:{
		todoList: Object,
		todo: Object
	},
	data: function(){
		return {
			mode: {
				detail: false,
				edit: false
			}
		}
	},	
	computed: {
		editMode: function(){
			return this.mode.edit ? "Summary":"Edit";
		}
	}
};
</script>