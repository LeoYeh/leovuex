import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
// init
Vue.use(VueRouter);
// root page
import App from './App.vue';
// page
import tmpl from './pages/tmpl.vue';
import login from './pages/login.vue';

var config = require('../config');
var isProduction = config.build.env.NODE_ENV.match(process.env.NODE_ENV);
const router = new VueRouter({
    // 使用 HTML 5 模式（沒有 hash, ex: #/hello）
    // mode: 'history',
    mode: 'hash',
    // base: __dirname,
    base: (isProduction) ? require('path').resolve(__dirname, '../denstu/ideashare') : __dirname,
    // routre 表
    routes: [{
            path: '/tmpl',
            name: 'tmpl',
            component: tmpl,
            meta: {
                requiresAuth: false
            }
        }, {
            path: '/login',
            name: 'login',
            component: login,
            meta: {
                requiresAuth: false
            }
        },
        // 當 url path 不符合 router 表的時候，預設轉址到
        // 順序一定要最後面
        {
            path: '/*',
            redirect: '/tmpl'
        }
    ]
});

// 頁面轉跳驗證
/*
router.beforeEach((to, from, next) => {
    // 如果 router 轉跳的頁面需要驗證 requiresAuth: true
    // console.log('=====> ', JSON.stringify(to));
    // console.log('to=', to.fullPath, '| from=', from.fullPath);
    if (to.matched.some(record => {
            // console.log(record.name, record.meta.requiresAuth);
            return record.meta.requiresAuth;
        })) {
        // 如果沒有 token 
        // console.log(JSON.stringify(store.state))
        // console.log('token?', store.state.token);
        if (!store.state.token) {
            // 轉跳到 login page
            next({
                path: '/login'
            });
        } else {
            next(); // 往下繼續執行
        }
    } else {
        next(); // 往下繼續執行
    }
});
*/

new Vue({
    el: '#app',
    // router 掛載設定
    router,
    // 加入 store
    store,
    // app.vue 掛載並 replace index.html 原始掛載點： <div id="app"></div>
    render: h => h(App)
});
