<template>
  <div id="app">
    <div class="test">
      wo shi test
    </div>
    <img src="./assets/logo.png">
    <div>
      <el-button @click="add()">默认按钮</el-button>
      <el-button @click="remote_contao_add()" type="primary">主要按钮</el-button>
    </div>
    <router-view></router-view>
    <div>bottom</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  component: {
    
  },
  created() {
    console.log(this.$store.state)
  },
  methods: {
    remote_contao_add() {
      this.$store.dispatch('REMOTE_CONTROL', {id: 1})
      setTimeout(() => {
        console.log(this.$store)
      }, 1000);
    },
    add() {
      this.$store.commit('ADD_COUNT')
    }
  }
}
</script>

<style lang="less" scoped>
@gray:#4a90e2;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .test {
    color: @gray;
  }
}
</style>


