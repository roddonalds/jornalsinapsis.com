import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles' // Ensure you are using css-loader
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Import Material Design Icons
import '@mdi/font/css/materialdesignicons.min.css';

const vuetify = createVuetify({
    components,
    directives
})

createApp(App).use(router).use(vuetify).mount('#app')
