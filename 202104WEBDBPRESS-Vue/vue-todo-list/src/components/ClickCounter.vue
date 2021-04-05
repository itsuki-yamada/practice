<template>
  <button v-on:click="onCountUpClick">+1</button>
  Click Count: {{ state.count }}
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    // リアクティブ情報を保持するstateを定義
    const state = reactive({
      // ボタンのクリック回数を保持するcountを定義
      count: 0,
    });
    // ボタンのクリックでcountの値をカウントアップする
    const onCountUpClick = () => state.count++;

    // <template>で使うプロパティ、関数を返す
    return {
        state,
        onCountUpClick
    };
  },
};
</script>
