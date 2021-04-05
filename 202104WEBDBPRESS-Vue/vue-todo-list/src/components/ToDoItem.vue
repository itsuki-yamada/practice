<template>
    <li class="todo-item"
        v-bind:class="{'done': done}"
        v-on:click="handleClick"
    >
        <span v-if="done">✔</span>
        <slot />
    </li>
</template>
<script>
    export default {
        props: {
            done: {
                type: Boolean
            }
        },
        emits: ['toggle'],
        methods: {
            handleClick(){
                // カスタムイベントtoggleを発行
                this.$emit('toggle')
            }
        }
    }
</script>