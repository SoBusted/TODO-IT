<template lang="pug">
    #app
        TodoHeader
        TodoInput(@addTodo="addTodo")
        TodoList(:propsdata="todoItems" @removeTodo="removeTodo")
        TodoFooter(@removeAll="clearAll")
    </div>
</template>

<script>
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

export default {
    data() {
        return {
            todoItems: []
        }
    },
    created() {
        this.todoItems = Object.keys(localStorage).filter(item => item !== 'loglevel:webpack-dev-server');
    },
    methods: {
        addTodo(item) {
            localStorage.setItem(item, item);
            this.todoItems.push(item);
        },
        removeTodo(item, index) {
            localStorage.removeItem(item);
            this.todoItems.splice(index, 1);
        },
        clearAll() {
            localStorage.clear();
            this.todoItems = [];
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
