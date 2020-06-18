<template lang="pug">
    #app
        TodoHeader
        TodoInput(@addTodo="addTodo")
        TodoList(@removeTodo="removeTodo")
        TodoFooter(@removeAll="clearAll")
</template>

<script>
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

export default {
    data() {
        return {
            
        }
    },
    created() {
        this.$store.commit('showTodo');
    },
    methods: {
        addTodo(item) {
            this.$store.commit('addTodo', item);
        },
        removeTodo(item, index) {
            this.$store.commit('removeTodo', { item, index });
        },
        clearAll() {
            this.$store.commit('clearAll');
        }
    },
    components: {
        'TodoHeader': TodoHeader,
        'TodoInput': TodoInput,
        'TodoList': TodoList,
        'TodoFooter': TodoFooter
    }
}
</script>

<style>
    body {
        text-align: center;
        background-color: #f6f6f8;
    }
    input {
        border-style: groove;
        width: 200px;
    }
    button {
        border-style: groove;
    }

    .shadow {
        box-shadow: 5px 10px 10px rgba(0, 0, 0, .03)
    }
</style>
