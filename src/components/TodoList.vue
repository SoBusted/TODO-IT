<template lang="pug">
    section
        transition-group(name="list", tag="ul", appear)
            li.shadow(v-for="todoItem, index in $store.state.todoItems", :key="todoItem")
                i.checkBtn.fas.fa-check(aria-hidden="true")
                | {{ todoItem }}
                span.removeBtn(type="button", @click="removeTodo(todoItem, index)")
                    i.far.fa-trash-alt(aria-hidden="true")
</template>

<script>
export default {
    methods: {
        removeTodo(todoItem, index) {
            this.$emit('removeTodo', todoItem, index);
        }
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
        cursor: pointer;
    }
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
</style>