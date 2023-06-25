<template>
    <div>
        <h1>Find as many anagrams as you can!</h1>
        <h2>Word: {{ currentWord }}</h2>
        <h2>Time Left: {{ timeLeft }}</h2>
        <h2>Score: {{ score }}</h2>
        <h2>Anagrams Left: {{ anagramsLeft }}</h2>
        <input v-model="userInput" @keyup.enter="checkAnagram" type="text" />
        <button @click="checkAnagram">Enter</button>
    </div>
</template>

<script>
import { getAnagrams } from '../utils/anagrams';
import { generateWord } from '../utils/words'

export default {
    props: ['wordLength'],
    data() {
        return {
            currentWord: '',
            anagrams: [],
            userInput: '',
            score: 0,
            timeLeft: 60,
        };
    },
    computed: {
        anagramsLeft() {
            return this.anagrams.length;
        },
    },
    methods: {
        checkAnagram() {
            if (this.anagrams.includes(this.userInput)) {
                this.score++;
                this.anagrams = this.anagrams.filter(word => word !== this.userInput);
                this.userInput = '';
                if (this.anagramsLeft === 0) {
                    this.newWord();
                }
            }
        },
        async newWord() {
            this.currentWord = await generateWord(this.wordLength);
            this.anagrams = await getAnagrams(this.currentWord);
        },
    },
    mounted() {
        this.newWord();
        this.timer = setInterval(() => {
            if (this.timeLeft > 0) {
                this.timeLeft--;
            } else {
                this.endGame();
            }
        }, 1000);
    },
    beforeUnmount() {
        clearInterval(this.timer);
    },
};
</script>
