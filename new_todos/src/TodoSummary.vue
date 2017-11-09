<template>
	<div>
		<p>Todo-Name: {{todo.name}}</p> <p>Todo-Description: {{todo.description}}</p>
	</div>
</template>

<script>
export default {
	name: 'todo-summary',
	props:{
		todo: Object
	}
};
</script>