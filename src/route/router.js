import VueRoute from 'vue-router'
const NotFoundComponent = () => import('./NotFoundComponent.vue')
const HelloWorld = () => import('../components/HelloWorld.vue')

const router = new VueRoute({
  mode: 'history',
  routes: [
    { path: '*', component: NotFoundComponent },
    {path: '/', component: HelloWorld, name: 'helloWorld'}
  ]
})

export default router