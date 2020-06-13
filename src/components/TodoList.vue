<template lang="pug">
    section
        ul
            li.shadow(v-for="todoItem, index in todoItems", :key="todoItem")
                i.checkBtn.fas.fa-check(aria-hidden="true")
                | {{ todoItem }}
                span.removeBtn(type="button", @click="removeTodo(todoItem, index)")
                    i.far.fa-trash-alt(aria-hidden="true")
</template>

<script>
export default {
    data() {
        return {
            todoItems: []
        }
    },
    methods: {
        removeTodo(todoItem, index) {
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index, 1);
        }
    },
    created() {
        this.todoItems = Object.keys(localStorage).filter(item => item !== 'loglevel:webpack-dev-server');
    }
}
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding-left: 0;
        margin-top: 0;
        text-align: text;
    }
    li {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: .5rem 0;
        padding: 0 .9rem;
        background: white;
        border-radius: 5px;
    }

    .checkBtn {
        line-height: 45px;
        color: #62acde;
        margin: 3px 5px 0 0;
    }
    .removeBtn {
        margin-left: auto;
        color: #de4343;
    }
</style>