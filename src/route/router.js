import VueRoute from 'vue-router'
const NotFoundComponent = () => import('./NotFoundComponent.vue')
const HelloWorld = () => import('../components/HelloWorld.vue')
const TestSlot = () => import('../components/testSlot.vue')

const router = new VueRoute({
  mode: 'history',
  routes: [
    { path: '*', component: NotFoundComponent },
    {path: '/', component: HelloWorld, name: 'helloWorld'},
    {path: '/testSlot', component: TestSlot, name: 'TestSlot'},
  ]
})
router.beforeEach((to, from, next) => {
  console.log(to, from)
});
export default router