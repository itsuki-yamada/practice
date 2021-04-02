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
            filteredTodoItems(){
                if(!this.filterValue) {
                    return this.todoItems
                }
                return this.todoItems.filter((todo) => {
                    return todo.text.includes(this.filterValue)
            }   )
            }
        },
        methods: {
            handleClick() {
                // 入力をリストに追加
                this.todoItems.push({
                    id: this.todoItems + 1,
                    text: this.inputValue
                })
                // 入力をクリアする
                this.inputValue=''
                console.log(this);
            }
        }
    }
</script>