import Vue from 'vue'
import mutations from './mutations.js'
// 引入 mutations_type （引用同一個 key）
import * as types from './mutations_type.js'

// todo
export const updateTodo = ({ commit }, obj) => {
    // console.log('updateTodo', obj);
    commit(types.UPDATE_TODO, obj);
}

export const toggleTodo = ({ commit }, key) => {
    commit(types.TOGGLE_TODO, key);
}

export const deleteTodo = ({ commit }, key) => {
    commit(types.DELETE_TODO, key);
}

export const addTodo = ({ commit }, newTodo) => {
    // 直接將 newTodo 傳遞給 mutation
    commit(types.ADD_TODO, newTodo);
}

// + - * /
export const actionIncrease = ({ commit }, num) => {
    console.log('actionIncrease ', num);
    commit(types.INCREASE, num);
}

export const actionDecrease = ({ commit }, num) => {
    console.log('actionDecrease ', num);
    commit(types.DECREASE, num);
}

export const actionMultiply = ({ commit }, num) => {
    console.log('actionMultiply ', num);
    commit(types.MULTIPLY, num);
}

export const actionDivision = ({ commit }, num) => {
    console.log('actionDivision ', num);
    commit(types.DEVISION, num);
}

export const actionCountReset = ({ commit }) => {
    console.log('actionCountReset');
    commit(types.COUNT_RESET);
}
