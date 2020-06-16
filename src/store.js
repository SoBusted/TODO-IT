import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todoItems: []
    },
    mutations: {
        showTodo: state => {
            state.todoItems = Object.keys(localStorage).filter(item => item !== 'loglevel:webpack-dev-server');
        },
        addTodo: (state, payload) => {
            localStorage.setItem(payload, payload);
            state.todoItems.push(payload);
        },
        removeTodo: (state, payload) => {
            localStorage.removeItem(payload.item);
            state.todoItems.splice(payload.index, 1);
        },
        clearAll: state => {
            localStorage.clear();
            state.todoItems = [];
        }
    }
});