<template>
    <div>
        <h1>Game Over!</h1>
        <h2>Your Score: {{ score }}</h2>
        <button @click="playAgain">Play Again</button>
        <button @click="backToStart">Back to Start Screen</button>
    </div>
</template>

<script>
export default {
    props: ['score'],
    methods: {
        playAgain() {
            this.$emit('playAgain');
        },
        backToStart() {
            this.$emit('backToStart');
        },
    },
};
</script>
