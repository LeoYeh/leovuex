const types = {
    INCREASE: 'count/INCREASE',
    DECREASE: 'count/DECREASE',
    COUNT_RESET: 'count/COUNT_RESET'
}

const state = {
    count: 0
}

const getters = {
    getCount: state => state.count
}

//非同步
const actions = {
    actionIncrease({ commit }, num) {
        commit(types.INCREASE, num);
    },
    actionDecrease({ commit }, num) {
        commit(types.DECREASE, num);
    },
    actionCountReset({ commit }) {
        commit(types.COUNT_RESET);
    }
}

// 同步
const mutations = {
    [types.INCREASE](state, num) {
        state.count += num;
        console.log('newINCREASE', num, 'state?', state.count);
    },
    [types.DECREASE](state, num) {
        state.count -= num;
        console.log('newDECREASE', num, 'state?', state.count);
    },
    [types.COUNT_RESET](state) {
        state.count = 0;
        console.log('newCOUNT_RESET - state?', state.count);
    }
}

/*
  因為我們把 vuex 所有職權都寫在同一隻檔案，
  所以必須要 export 出去給最外層 index.js 組合使用
*/
export default {
    state,
    getters,
    actions,
    mutations
}
