const Home = () => import('../pages/Home/Home.vue')
const Cart = () => import('../pages/Cart/Cart.vue')
const KnewThings = () => import('../pages/KnewThings/KnewThings.vue')
const Category = () => import('../pages/Category/Category.vue')
const Personal = () => import('../pages/Personal/Personal.vue')
const Login = () => import('../pages/Login/Login.vue')
const Phone = () => import('../pages/Phone/Phone.vue')
const Email = () => import('../pages/Email/Email.vue')



export default [
  {
    path: '/home',
    component: Home,
    meta: {
      showFoot: true
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      showFoot: true
    }
  },
  {
    path: '/knewThings',
    component: KnewThings,
    meta: {
      showFoot: true
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      showFoot: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/email',
    component: Email
  },
  {
    path: '/phone',
    component: Phone
  },
  {
    path: '/personal',
    component: Personal,
    meta: {
      showFoot: true
    }
  },
  {
    path: '/',
    component: Home,
    meta: {
      showFoot: true
    }
  },
]
