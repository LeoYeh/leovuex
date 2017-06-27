//有引用的 js 需在這裡註冊，vuex 會把引用的 js 打包在一起，
//可分開註冊
//也可以變成打包成 modules 注入

import Vue from 'vue';
import Vuex from 'vuex';
// root
import { state, getters, actions, mutations } from './root.js';
// modules
import login from './modules/login';
import tmpl from './modules/tmpl';
import jumbotron from './modules/jumbotron';

Vue.use(Vuex);

export default new Vuex.Store({
    // root
    state,
    actions,
    mutations,
    getters,
    // 將整理好的 modules 放到 vuex 中組合
    modules: {
        login,
        tmpl,
        jumbotron,
    },
    // 嚴格模式，禁止直接修改 state
    strict: true
});
