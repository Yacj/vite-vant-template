import {createRouter, createWebHashHistory} from 'vue-router'
import {getToken} from "../utils/auth";

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/index.vue'),
        meta: {
            title: '首页',
            keepAlive: true
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
router.beforeEach((to, form, next) => {
    const {title, isLogin} = to.meta
    const token = getToken()
    if (title) {
        document.title = title
    }
    if (isLogin && !token) {
        next('login')
        return
    }
    next()
})
export default router