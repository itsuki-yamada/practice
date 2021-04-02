<template>
    <!-- 双方向データバインディング　inputの入力内容をプロパティに受け取る -->
    <input v-model="inputValue">

    <!-- v-onディレクトリ　イベントハンドラの登録 -->
    <!-- v-on:イベント名="イベントハンドラ名" 省略記法=> @イベント名 -->
    <button v-on:click="handleClick">
        add
    </button>

    <ul>
        <li v-for="todo in todoItems"
        v-bind:key="todo.id"
        v-on:click="todo.done = !todo.done"
        >
        <span v-if="todo.done">✔</span>
            {{ todo.text}}
        </li>
    </ul>
</template>
<script>
    export default {
        data(){
            return{
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
                ]
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