<script>
export default {
  name: 'App',
};
</script>
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<style>
.container {
  display: flex;
}
.item {
  flex: auto;
  text-align: center;
  border-radius: 10px;
}
</style>