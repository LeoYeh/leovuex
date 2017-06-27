import * as types from './mutations_type.js';

let todoKey = state.todos.length;
// mutations
export const mutations = {
    [types.INCREASE](state, num) {
        state.count += num;
        console.log('INCREASE ', num, 'state?', state.count);
    },
    [types.DECREASE](state, num) {
        state.count -= num;
        console.log('DECREASE ', num, 'state?', state.count);
    },
    [types.MULTIPLY](state, num) {
        state.count *= num;
        console.log('MULTIPLY ', num, 'state?', state.count);
    },
    [types.DEVISION](state, num) {
        state.count /= num;
        console.log('DEVISION ', num, 'state?', state.count);
    },
    [types.COUNT_RESET](state) {
        // 歸零，就將 state 設定為 0 囉!
        state.count = 0;
        console.log('COUNT_RESET - state? ', state.count);
    }
}
