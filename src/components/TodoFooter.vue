<template lang="pug">
    .clearAllContainer
        span.clearAllBtn(@click="clearTodo") Clear All
</template>

<script>
export default {
    methods: {
        clearTodo() {
            this.$emit('removeAll');
        }
    }
}
</script>

<style scoped>
    .clearAllContainer {
        width: 8.5rem;
        height: 50px;
        line-height: 50px;
        background-color: white;
        border-radius: 5px;
        margin: 0 auto;
    }
    .clearAllBtn {
        display: block;
        color: #e20303;
        cursor: pointer;
    }
</style>