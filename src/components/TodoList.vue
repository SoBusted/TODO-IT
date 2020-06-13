<template lang="pug">
    section
        ul
            li(v-for="todoItem in todoItems") {{ todoItem }}
</template>

<script>
export default {
    data() {
        return {
            todoItems: []
        }
    },
    created() {
        this.todoItems = Object.keys(localStorage);
    }
}
</script>

<style>
</style>