import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home'
import SignUp from '../components/SignUp'
import Login from "../components/Login";
import Add from '../components/Add'
import Update from '../components/Update'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/signup'
    },
    {
        name: 'Login',
        component: Login,
        path: '/login'
    }, 
    {
        name: 'Update',
        component: Update,
        path: '/update/:id'
    },
    {
        name: 'Add',
        component: Add,
        path: '/add'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router