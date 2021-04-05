<template>
	<input type="text" placeholder="new ToDo" v-model="inputValue" >
  <button v-on:click="handleClick">submit</button>
	<input type="text" placeholder="Filter" v-model="filterValue" >
	<ul>
		<ToDoItem 
			v-for="todo in filteredTodoItems"
			v-bind:key="todo.key"
			v-bind:done="todo.done"
			v-on:toggle="todo.done = !todo.done"
		>
			{{ todo.text }}
		</ToDoItem>
	</ul>
</template>

<script>
import { ref, reactive, computed } from "vue";
import ToDoItem from "./ToDoItem.vue";

function userTextFilter(items, getItemText) {
	const filterValue = ref('');
	const filteredItems = computed(() => {
		if(!filterValue.value){
			return items;
		}
		return items.filter(item => getItemText(item)
			.includes(filterValue.value))
	})
	return { filterValue, filteredItems }
}

export default {
	components: { ToDoItem },
  setup() {
    // もととなるToDoリスト
    const todoItems = reactive([
      { id: 1, done: false, text: "Go out to sea" },
      { id: 2, done: false, text: "Invite the first member" },
      { id: 3, done: false, text: 'Singing "Around the world"' },
    ]);
    // ToDoの追加関連の定義
    const inputValue = ref("");
    const handleClick = () => {
      const id = todoItems.length + 1;
      todoItems.push({ id, done: false, text: inputValue.value });
      inputValue.value = "";
    };

    // ToDoリストの絞り込み関連の定義
    const {
			filterValue,
			filteredItems: filteredTodoItems
		} = userTextFilter(
			todoItems,
			todo => todo.text
		)
    return {
      inputValue,
      filterValue,
      filteredTodoItems,
      handleClick,
    };
  },
};
</script>
