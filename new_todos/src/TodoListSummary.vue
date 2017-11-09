<template>
	<div>
		<p>Name: {{todoList.name}}</p> <p>Description: {{todoList.description}}</p>
	</div>
</template>


<script>
export default {
	name: "todoListSummary",
	props:{
		todoList: Object
	}
};
</script>