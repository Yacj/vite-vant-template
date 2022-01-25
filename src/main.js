import {createApp} from 'vue'
import App from './App.vue'
import router from "./router";
import pinIaStore from "./store";
import './styles/base.scss'

const app = createApp(App)
app.use(router)
    .use(pinIaStore)
    .mount('#app')
