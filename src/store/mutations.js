import * as types from './mutations_type.js'
// import * as state from './state.js'
// import state from './state.js'
// import Vue from 'vue'

// state
export const state = {
    count: 0,
    todos: [
        { key: 0, content: 'vue.js 2.0', done: true },
        { key: 1, content: 'vuex 2.0', done: false },
        { key: 2, content: 'vue-router 2.0', done: false },
        { key: 3, content: 'vue-resource 2.0', done: false },
        { key: 4, content: 'webpack', done: false }
    ]
}

// 這邊簡單做一個 todo 的流水 key
// 預設值是 todos 的長度
let todoKey = state.todos.length;
// mutations
export const mutations = {
    // 更新
    [types.UPDATE_TODO](state, obj) {
        console.log(JSON.stringify(obj))
        state.todos.map(function(item, i) {
            if (item.key === obj.key) {
                // console.log(JSON.stringify(item));
                console.log('UPDATE_TODO:', item.content, ' to →', obj.change);
                // 找到 todo 更新 content
                state.todos[i].content = obj.change;
            }
        });
    },
    // todo
    //TOGGLE_TODO for usual checkbox
    [types.TOGGLE_USUAL_TODO](state, key) {
        console.log(state, key);
        state.todos.map(function(item, i) {
            if (item.key === key) {
                item.done = !item.done;
                console.log('TOGGLE_TODO:', item.content, 'done?', item.done);
            }
        });
    },
    [types.TOGGLE_TODO](state, obj) {
        state.todos.map(function(item, i) {
            if (item.key === obj.key) {
                item.done = obj.checked; //直接使用 chenkbox $emit 的 value
                console.log('TOGGLE_TODO:', item.content, '| obj.checked?', obj.checked, '| done?', item.done);
            }
        });
    },
    [types.DELETE_TODO](state, key) {
        state.todos.map(function(item, i) {
            if (item.key === key) {
                console.log('DELETE_TODO:', item.content, ', index?', i);
                state.todos.splice(i, 1);
            }
        });
    },
    [types.ADD_TODO](state, newTodo) {
        // todos 是一個 Array 所以 push 一個同結構的 Object
        state.todos.push({
            key: todoKey, // 流水 key
            content: newTodo, // 新 todo 的內容
            done: false // 預設當然是未做完
        });

        // 流水 key +1
        todoKey++;
    },
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
