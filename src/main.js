import Vue from 'vue';
import VueMaterial from 'vue-material';
import { mapGetters } from 'vuex';
import 'vue-material/dist/vue-material.css';
import router from './routers/app';
import store from './store';
import { register as swRegister } from './lib/service-worker';
import { subscribe } from './lib/push-notifications';

/**
 * Register custom components
 */
require('./components');

/**
 * Register vue material components and themes
 */
Vue.use(VueMaterial)
// Vue.use(VueMaterial.MdCore) //Required to boot vue material
// Vue.use(VueMaterial.MdButton)

/**
 * Initialize Vue app
 */
new Vue({
    router,
    store,
    created() {
        // Register service worker
        swRegister();
    },
    computed: {
        ...mapGetters({
            swRegistration: 'serviceWorkerRegistration'
        })
    },
    watch: {
        swRegistration() {
            console.log('service worker registered');
            // Ask for push notification permission
            subscribe();
        }
    },
    methods: {
        toggleLeftSidenav() {
            this.$refs.leftSidenav.toggle();
        },
        toggleRightSidenav() {
            this.$refs.rightSidenav.toggle();
        },
        closeRightSidenav() {
            this.$refs.rightSidenav.close();
        },
        open(ref) {
            console.log('Opened: ' + ref);
        },
        close(ref) {
            console.log('Closed: ' + ref);
        }
    }
}).$mount('#app');
