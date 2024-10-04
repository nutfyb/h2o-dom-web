import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import FrontendLayout from '@/core/layout/FrontendLayout.vue'

function lazyLoad(view: string) {
	return () => import(`@/views/frontend/${view}.vue`)
}

const routes: Array<RouteRecordRaw> = [
    // Frontend Route
    {
        // เรียกตัว Frontend Layout (แม่)
        path: '/:locale?',
        name: 'Frontend',
        component: FrontendLayout,
        
        // เรียกตัวลูกมาใส่
        children: [
            { path: '/:pathMatch(.*)*', name: 'NotFound', component: lazyLoad("HomeView") },

            {
                path: '',
                name: 'Home',
                component: lazyLoad("HomeView"),
                meta: {
                    title: 'H2O DOM – The best dormitory booking system',
                    header: 'headline'
                }
            },
            {
                path: 'about',
                name: 'About',
                component: lazyLoad("AboutView"),
                meta: {
                    title: 'About – H2O DOM – The best dormitory booking system'
                }
            },
            {
                path: 'services',
                name: 'Services',
                component: lazyLoad("ServicesView"),
                meta: {
                    title: 'Services – H2O DOM – The best dormitory booking system'
                }
            },
            {
                path: 'contact',
                name: 'Contact',
                component: lazyLoad("ContactView"),
                meta: {
                    title: 'Contact – H2O DOM – The best dormitory booking system'
                }
            },
            {
                path: 'login',
                name: 'Login',
                component: lazyLoad("LoginView"),
                meta: {
                    title: 'Login – H2O DOM – The best dormitory booking system'
                }
            },
            {
                path: 'register',
                name: 'Register',
                component: lazyLoad("RegisterView"),
                meta: {
                    title: 'Register – H2O DOM – The best dormitory booking system'
                }
            },
            {
                path: 'forgotPassword',
                name: 'ForgotPassword',
                component: lazyLoad("ForgotPasswordView"),
                meta: {
                    title: 'Forgot Password – H2O DOM – The best dormitory booking system'
                }
            },
            {
                path: 'roomDetail/:id',
                name: 'RoomDetail',
                component: lazyLoad("RoomDetailView"),
                meta: {
                    title: 'Forgot Password – H2O DOM – The best dormitory booking system'
                }
            },
        ]
    },

]

const router = createRouter({
    history: createWebHistory(import.meta.env.URL),
    routes
})

// การเรียกทำงานก่อนที่ route จะโหลด
router.beforeEach((to, _, next) => {
    
    if(typeof(to.meta.title) == 'string'){
        document.title = to.meta.title
    }

    next()

})

export default router