<template lang="pug">
    .inputBox.shadow
        input(v-model="newTodoItem", placeholder="Type what you have to do", @keyup.enter="addTodo", autofocus)
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
                this.$emit('addTodo', item);
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
        background: #555;
        width: 3rem;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
    }
    .addBtn {
        color: white;
    }
</style>