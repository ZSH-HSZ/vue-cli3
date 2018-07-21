<template>
  <div id="app">
    <router-view></router-view>
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

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
</style>


