<template>

    <!-- todoリスト -->
    <input v-model="inputValue">
    <button v-on:click="handleClick">
        add
    </button>

    <!-- フィルタ機能 -->
    <input
        v-model="filterValue"
        placeholder="フィルタテキスト"
    >

    <ul>
        <li
            v-for="todo in filteredTodoItems"
            v-bind:key="todo.id"
            class="todo-item"
            v-bind:class="{'done': todo.done}"
            v-on:click="todo.done = !todo.done"
        >
            <span v-if="todo.done">✔</span>
            {{ todo.text }}
        </li>
    </ul>
</template>

<script>
    export default {
        data() {
            const todoItems = [
                {
                    id: 1,
                    done: false,
                    text: 'Go out to sea'
                },
                {
                    id: 2,
                    done: false,
                    text: 'Invite the first member'
                }
            ]
            return {
                inputValue: '',
                todoItems,
                filteredTodoItems: todoItems,
                filterValue: ''
            }
        },
        // watchオプションに定義したメソッドは、同じ名前のプロパティの値が変更されたときに呼び出される
        watch: {
            // filterValueの値の変更を監視し、filteredTodoItemsを再計算する
            filterValue() {
                this.updateFilteredTodoItems()
            },
            // todoItemsの値の変更を監視し、filteredTodoItemsを再計算する
            todoItems: {
                handler() {
                    this.updateFilteredTodoItems()
                },
                // 深く監視することで配列要素の変更も監視する
                deep: true
            },
        },
        methods: {
            handleClick() {
                // filteredTodoItemsに再計算した配列を与える
                updateFilteredTodoItems() {
                    this.filteredTodoItems = this.filterValue
                        ?   this.todoItems.filter((todo) =>
                            todo.text.includes(this.filterValue)
                        )
                        : this.todoItems
                }
            }
        }
    }
</script>

<style>
    .todo-item.done {
        background-color: #3fb983;
        color: #ffffff
    }
</style>