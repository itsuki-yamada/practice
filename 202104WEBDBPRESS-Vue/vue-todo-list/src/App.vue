<template>
  <h1>ToDoList</h1>

  <!-- ToDolistを使用する -->
  <ToDoList />
  <br>

  <!-- transitionを使用したアニメーション -->
  <TextAnimation />
  <br>

  <!-- CompositionAPIを使用したカウントアップボタン -->
  <ClickCounter />
  <br>

  <!-- ToDoList2を使用する -->
  <ToDoList2 />
</template>

<script>
// ToDoListをインポート
import ToDoList from "./components/ToDoList.vue";
import TextAnimation from "./components/TextAnimation.vue";
import ClickCounter from "./components/ClickCounter.vue";
import ToDoList2 from "./components/ToDoList2.vue";

export default {
  name: "App",
  components: {
    // ToDoListを<template>で使用できるようにする
    ToDoList,
    ToDoList2,
    TextAnimation,
    ClickCounter,
  },
};
</script>
