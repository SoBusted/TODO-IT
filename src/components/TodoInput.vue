<template lang="pug">
    .inputBox.shadow
        input(v-model="newTodoItem", placeholder="Type what you have to do", @keyup.enter="addTodo")
        span.addContainer(@click="addTodo")
            i.addBtn.fas.fa-plus(aria-hidden="true")
</template>

<script>
export default {
    data() {
        return {
            newTodoItem: ''
        }
    },
    methods: {
        addTodo() {
            let item = this.newTodoItem.trim();

            if (item !== '') {
                localStorage.setItem(item, item);
                this.clearInput();
            }
        },
        clearInput() {
            this.newTodoItem = '';
        }
    }
}
</script>

<style>
    input:focus {
        outline: none;
    }

    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input {
        border-style: none;
        font-size: .9rem;
    }
    .addContainer {
        float: right;
        display: block;
        background: linear-gradient(to right, #6478fb, #8763fb);
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn {
        color: white;
        vertical-align: middle;
    }
</style>