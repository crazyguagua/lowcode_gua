import { createRouter ,createWebHistory} from 'vue-router'
import routes from '~pages'  //固定写法

console.log(routes,'1111111')
export const router = createRouter({
    history:createWebHistory(),
    routes,
})