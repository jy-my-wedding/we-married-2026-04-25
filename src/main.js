import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VCalendar from 'v-calendar'
// v-calendar CSS
import 'v-calendar/dist/style.css'
import { FontAwesomeIcon } from './plugin/fontawesome.js'

const app = createApp(App)

app.use(router)
app.use(VCalendar, {})

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
