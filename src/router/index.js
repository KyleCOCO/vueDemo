import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@/pages/Home/home')
const Category = () => import('@/pages/Category/category')
const Cart = () => import('@/pages/Cart/cart')
const Profile = () => import('@/pages/Profile/profile')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
