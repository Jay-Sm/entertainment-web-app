import { createApp } from 'vue'
import App from './App.vue'

// Vue Imports
import router from './router/router'
import './assets/main.css'

// Flicking Vue
import Flicking from "../node_modules/@egjs/vue3-flicking/dist/flicking.esm"
import "../node_modules/@egjs/vue3-flicking/dist/flicking.css";


const app = createApp(App)
app.use(router)
app.component("Flicking", Flicking);

app.mount('#app')
