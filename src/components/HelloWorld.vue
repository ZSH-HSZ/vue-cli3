<template>
  <div class="hello">
    <div class="test">
      wo shi test
    </div>
    <img src="../assets/logo.png">
    <div>
      <el-button @click="add()">默认按钮</el-button>
      <el-button @click="remote_contao_add()" type="primary">主要按钮</el-button>
    </div>
    <router-view></router-view>
    <div>bottom</div>
    <h1>{{ msg }}</h1>
    <p>
      For guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank">babel</a></li>
    </ul>
  </div>
</template>

<script>
import { post, get } from '../api/api.js'
import axios from 'axios'
var moment = require('moment');
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    get('dashBoard', {}, {page: 1, index: 1})
    .then(val=>{
      console.log(val)
    })
    post('dashBoard', {}, {page: 1, index: 1})
    .then(val=>{
      console.log(val)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.test {
  color: $blue;
}
</style>


