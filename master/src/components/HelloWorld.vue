<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="apps">
      <remote-component class="card" url="/app1/js/app.js" router="a" />
      <remote-component class="card" url="/app2/js/app.js" router="a" />
      <remote-component class="card" url="/app1/js/app.js" router="b" />
    </div>
  </div>
</template>

<script>
import RemoteComponent from './RemoteComponent'

export default {
  name: 'HelloWorld',
  components: { RemoteComponent },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.apps {
  width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.card {
  width: 200px;
  height: 100px;
  border: 1px solid #ddd;
}
</style>
