import * as types from './mutations_types.js';

export const state = {
    loading: false,
    uname: '',
    token: '',
    count: 0,
}

export const getters = {
    getAllState: state => state,
    getLoading: state => state.loading,
    getUserName: state => state.uname,
}

export const actions = {
    toggleLoading({ commit }, isLoading) {
        commit(types.LOADING, isLoading);
    },
    setUserName({ commit }, name) {
        commit(types.SET_USER_NAME, name);
    },
    // login
    actionLogin({ commit }, { email, password }) {
        // 目前沒找到比較好的範例 API，因此使用延遲 1.5s 模擬 ajax 以及簡單驗證。
        console.log('1. actionLogin');
        commit(types.LOADING, true); // 打開遮罩
        // 使用 Promise 包裝 API
        return new Promise((resolve, reject) => {
            let apiPath = `http://beta.json-generator.com/api/json/get/NkOsUyoQ7`;
            fetch(apiPath, {
                    headers: {
                        'Accept': 'application/json',
                    },
                    credentials: 'same-origin',
                    method: 'POST',
                })
                .then(function(response) {
                    return response.json()
                })
                .then(function(rep) {
                    if (email === 'leo@iprefer.com.tw' && password === '123' && (rep[0].result)) {
                        console.log('2. Promise resolve');
                        commit(types.LOADING, false); // 關閉遮罩
                        commit(types.TOKEN, `${new Date().getTime()*Math.random()}`);
                        resolve(); // resolve 結果會在 then 裡面收到
                    }
                    // error
                    else {
                        commit(types.LOADING, false); // 關閉遮罩
                        reject('登入失敗！'); // reject 結果會在 catch 裡面收到
                    }
                })
        });
    },
    actReset({ commit }) {
        commit(types.TOKEN, '');
        commit(types.SET_USER_NAME, '');
    }
}

export const mutations = {
    [types.LOADING](state, isLoading) {
        state.loading = isLoading;
    },
    [types.TOKEN](state, token) {
        state.token = token;
    },
    [types.SET_USER_NAME](state, name) {
        state.uname = name;
    },
}
