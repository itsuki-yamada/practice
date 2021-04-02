<template>
    <!-- 双方向データバインディング　inputの入力内容をプロパティに受け取る -->
    <input v-model="inputValue">

    <!-- v-onディレクトリ　イベントハンドラの登録 -->
    <!-- v-on:イベント名="イベントハンドラ名" 省略記法=> @イベント名 -->
    <button v-on:click="handleClick">
        submit
    </button>

    <ul>
        <li v-for="todo in todoItems"
        v-bind:key="todo.id"
        >
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
                    {id: 1, text: 'Go out to sea'},
                    {id: 2, text: 'Invite the first member'}
                ]
            }
        },
        methods: {
            handleClick() {
                alert(this.inputValue)
            }
        }
    }
</script>