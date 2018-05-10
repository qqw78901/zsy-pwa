/**
 * @file entry
 * @author qqw78901(qqw78901@126.com)
 */
// import 'babel-polyfill'
import Vue from 'vue';
import Meta from 'vue-meta';
import axios from 'axios';
import api from './api';

import {createRouter} from '@/.lavas/router';
import {createStore} from '@/.lavas/store';
import AppComponent from './App.vue';
import Vuetify from 'vuetify';

Vue.use(Meta);

Vue.use(Vuetify);
Vue.prototype.$http = axios;
Vue.prototype.$api = api;

Vue.config.productionTip = false;

export function createApp() {
    let router = createRouter();
    let store = createStore();
    let App = Vue.extend({
        router,
        store,
        ...AppComponent
    });
    return {App, router, store};
}

if (module.hot) {
    module.hot.accept();
}
