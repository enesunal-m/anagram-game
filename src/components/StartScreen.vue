<template>
    <div>
        <h1>Welcome to Anagram Hunt!</h1>
        <label>Enter word length: </label>
        <input v-model="wordLength" type="number" min="1" />
        <button @click="startGame">Start Game</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            wordLength: null,
        };
    },
    methods: {
        startGame() {
            this.$emit('start', this.wordLength);
        },
    },
};
</script>
