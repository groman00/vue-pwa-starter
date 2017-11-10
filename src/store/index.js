import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import serviceWorker from './modules/service-worker';

const env = process.env;

Vue.use(Vuex);

export default new Store({
    modules: {
        serviceWorker
    },
    strict: env.NODE_ENV !== 'production'
});
