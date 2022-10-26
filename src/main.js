import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";

import MainMenu from "@/components/MainMenu";
import Motoristas from "@/components/Motoristas";
import Despesas from "@/components/Despesas";
import Servicos from "@/components/Servicos";
import Rotas from "@/components/Rotas";

const history = createWebHistory();

export const routes = [
    {path: '', component: MainMenu, name: 'MainMenu'},
    {path: '/motoristas', component: Motoristas, name: 'Motoristas'},
    {path: '/servicos', component: Servicos, name: 'Serviços'},
    {path: '/despesas', component: Despesas, name: 'Despesas'},
    {path: '/rotas', component: Rotas, name: 'Rotas'}
]

const router = createRouter({
    history: history,
    routes: routes
})

createApp(App).use(router).mount('#app')
