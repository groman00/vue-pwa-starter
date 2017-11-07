import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import router from './routers/app';

Vue.use(VueMaterial)
// Vue.use(VueMaterial.MdCore) //Required to boot vue material
// Vue.use(VueMaterial.MdButton)
// Vue.use(VueMaterial.MdBottomBar)
// Vue.use(VueMaterial.MdIcon)


// Register service worker
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
}

new Vue({
    router,
    // store
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
