<template>
  <div id="app1" class="test">
    <span :class="router">我是卡片1 {{ router }}</span>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: {
    router: String
  }
}
</script>

<style scoped lang="less">
.test {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.a {
  color: green;
}

.b {
  color: blue;
}
</style>
