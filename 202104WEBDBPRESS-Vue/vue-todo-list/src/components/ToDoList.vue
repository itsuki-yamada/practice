<template>
    <div>
        <!-- todoリスト -->
        <input v-model="inputValue">
        <button v-on:click="handleClick">
            add
        </button>

        <br>

        <!-- フィルタ機能 -->
        <input
            v-model="filterValue"
            placeholder="フィルタテキスト"
        >

        <ul>
            <ToDoItem
                v-for="todo in filteredTodoItems"
                v-bind:key="todo.id"
                v-bind:text="todo.text"
                v-bind:done="todo.done"
                v-on:toggle="todo.done = !todo.done"
            />
            <!-- <li
                v-for="todo in filteredTodoItems"
                v-bind:key="todo.id"
                class="todo-item"
                v-bind:class="{'done': todo.done}"
                v-on:click="todo.done = !todo.done">
                <span v-if="todo.done">✓</span> {{ todo.text }}
            </li> -->
        </ul>
    </div>
</template>

<script>
    import ToDoItem from './ToDoItem.vue'

    export default {
        components: { ToDoItem },
        data() {
            return {
                inputValue: '',
                todoItems: [
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
            ],
                filterValue: ''
            }
        },
        computed: {
            filteredTodoItems() {
                if (!this.filterValue) {
                    return this.todoItems
                }
                return this.todoItems.filter((todo)=>{
                    return todo.text.includes(this.filterValue)
                })
            }
        },
        methods: {
            handleClick() {
                this.todoItems.push({
                    id: this.todoItems.length + 1,
                    done: false,
                    text: this.inputValue
                })
                this.inputValue = ''
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