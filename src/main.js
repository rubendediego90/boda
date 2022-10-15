import { createApp } from 'vue'
import { Quasar,Notify } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

const myApp = createApp(App)

Notify.setDefaults({
  position: 'center',
  timeout: 5000,
  textColor: 'white',
  actions: [{ icon: 'close', color: 'white' }]
})

myApp.use(Quasar, {
  plugins: {Notify}, // import Quasar plugins and add here
})

myApp.mount('#app')
