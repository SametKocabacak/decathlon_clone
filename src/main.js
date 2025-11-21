import { createApp } from 'vue'
import App from './App.vue'
import PageDataProvider from './components/data/PageDataProvider.vue'

const app = createApp(PageDataProvider)
app.component('AppContent', App)
app.mount('#app')

