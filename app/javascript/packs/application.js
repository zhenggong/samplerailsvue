import Vue from 'vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
import App from '../app.vue'

Vue.use(Vuetify);
new Vue({
    el: '#app',
    components: {App},
    template: '<app></app>'
})