<template>
  <h1>ToDoList</h1>

  <!-- ToDolistを使用する -->
  <ToDoList />

  <!-- transitionを使用したアニメーション -->
  <TextAnimation />
</template>

<script>
// ToDoListをインポート
import ToDoList from './components/ToDoList.vue'
import TextAnimation from './components/TextAnimation.vue'

export default {
  name: 'App',
  components: {
    // ToDoListを<template>で使用できるようにする
    ToDoList,
    TextAnimation
  }
}
</script>