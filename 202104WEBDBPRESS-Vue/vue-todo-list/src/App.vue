<template>
  <!-- ToDolistを使用する -->
  <ToDoList />
</template>

<script>
// ToDoListをインポート
import ToDoList from './components/ToDoList.vue'

export default {
  name: 'App',
  components: {
    // ToDoListを<template>で使用できるようにする
    ToDoList
  }
}
</script>
