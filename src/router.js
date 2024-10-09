import { createWebHistory, createRouter } from "vue-router"
import StoreView from "./views/StoreView.vue"
import HomeView from "./views/HomeView.vue"

const routes=[
    {
        //http://localhost:5175/
        path: '/',
        component: HomeView,
        name: 'home'
    },
    {
        //http://localhost:5175/store
        path: '/store',
        component: StoreView,
        name: 'store'
    },
]



const router = createRouter({
    history: createWebHistory(), //使用 HTML5 History API
    //routes: routes
    routes
})

export default router