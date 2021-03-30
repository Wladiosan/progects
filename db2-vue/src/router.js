import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/Home'

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {path: '/', component: Home},
        {path: '/sign-in-one', component: () => import('@/views/SignIn/SignInOne')},
        {path: '/sign-in-two', component: () => import('@/views/SignIn/SignInTwo')},
        {path: '/sign-in-three', component: () => import('@/views/SignIn/SignInThree')},
        {path: '/sign-in-four', component: () => import('@/views/SignIn/SignInFour')},
        {path: '/sign-up-one', component: () => import('@/views/SignUp/SignUpOne')},
        {path: '/sign-up-two', component: () => import('@/views/SignUp/SignUpTwo')},
        {path: '/sign-up-three', component: () => import('@/views/SignUp/SignUpThree')},
        {path: '/sign-up-four', component: () => import('@/views/SignUp/SignUpFour')},
        {path: '/sign-up-five', component: () => import('@/views/SignUp/SignUpFive')}
    ]
})