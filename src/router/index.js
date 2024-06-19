import { createRouter, createWebHistory } from 'vue-router'
import inicio from '../pages/inicio.vue'
import noticias from '../pages/noticias.vue'
import critica from '../pages/critica.vue'
import videos from '../pages/videos.vue'
import podcast from '../pages/podcast.vue'
import sobre from '../pages/sobre.vue'

const routes = [
    { path: '/', redirect: '/inicio' },
    { path: '/inicio', component: inicio },
    { path: '/noticias', component: noticias },
    { path: '/critica', component: critica },
    { path: '/videos', component: videos },
    { path: '/podcast', component: podcast },
    { path: '/sobre', component: sobre }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
