<template>
	<div>
		<transition-group name="component-fade" mode="in-out">
			<todo-list-summary 
				v-if="!mode.edit" 
				v-bind:todo-list="todoList" 
				v-bind:key="todoList._id"
			>
			</todo-list-summary>
			
			<edit-todo-list 
				v-if="mode.edit" 
				v-bind:todo-list="todoList" 
				v-bind:key="todoList._id"
			>
			</edit-todo-list>
		</transition-group>

		<button 
			v-bind:key="todoList._id"
			v-on:click="mode.edit = !mode.edit" 
		>
			{{ editMode }}
		</button>
		<button 
			v-bind:key="todoList._id"
			v-on:click="mode.detail = !mode.detail" 
		>
			{{ detailMode }}
		</button>
		

		<transition-group name="component-fade" mode="in-out">
			<add-todo 
				v-if="mode.detail"
				v-bind:todo-list="todoList"
				v-bind:key="todoList._id"
			>
			</add-todo>

			<ul 
				v-if="mode.detail"
				v-bind:key="todoList._id"
			>
				<li 
					is="todo-item"
					v-for="todo in todoList.todos"
					v-bind:todo-list="todoList"
					v-bind:todo="todo"
					v-bind:key="todo._id"
				>
				
				</li>
			
			</ul>
		
		</transition-group> 
	</div>
</template>

<script>
export default {
	name: 'todo-list-item',
	props:{
		todoList: Object
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
		},
		detailMode: function(){
			return this.mode.detail ? "Hide":"Detail";
		},
	}
};
</script>
