<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true,
    },
    incompleteTodos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <header style="text-align: center">
    <h1 class="title">備忘錄 ToDo List</h1>
    <!--<p>{{ incompleteTodos.length }} 件未完成事項 / 共 {{todos.length}} 件事項</p>-->
    <p>{{ incompleteTodos.length }} to do / {{ todos.length }} items</p>
  </header>
</template>

<style scoped>
.title {
  @apply text-slate-800 text-5xl;
}
</style>
