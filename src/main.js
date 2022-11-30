import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router"
import axios from 'axios'
import VueAxios from 'vue-axios'
import PrimeVue from 'primevue/config'
import Dropdown from 'primevue/dropdown'
import InputText from 'primevue/inputtext';

import 'primevue/resources/themes/lara-light-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

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

let app = createApp(App);

app.use(router);
app.use(VueAxios, axios);
app.use(PrimeVue);
app.component('Drop-down', Dropdown);
app.component('p-input', InputText);

app.mount('#app')