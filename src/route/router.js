import VueRoute from 'vue-router'
const HelloWorld = () => import('../components/HelloWorld.vue')

const router = new VueRoute({
  routes: [
    {path: '/', component: HelloWorld, name: 'helloWorld'}
  ]
})

export default router