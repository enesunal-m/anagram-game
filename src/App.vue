<template>
  <div id="app">
    <StartScreen v-if="gameState === 'start'" @start="startGame" />
    <GameScreen v-if="gameState === 'playing'" :wordLength="wordLength" @end="endGame" />
    <EndScreen v-if="gameState === 'end'" :score="score" @playAgain="playAgain" @backToStart="backToStart" />
  </div>
</template>

<script>
import StartScreen from './components/StartScreen.vue';
import GameScreen from './components/GameScreen.vue';
import EndScreen from './components/EndScreen.vue';

export default {
  name: 'App',
  components: {
    StartScreen,
    GameScreen,
    EndScreen
  },
  data() {
    return {
      gameState: 'start',
      wordLength: null,
      score: null
    };
  },
  methods: {
    startGame(wordLength) {
      this.wordLength = wordLength;
      this.gameState = 'playing';
    },
    endGame(score) {
      this.score = score;
      this.gameState = 'end';
    },
    playAgain() {
      this.gameState = 'playing';
      this.score = null;
    },
    backToStart() {
      this.gameState = 'start';
      this.wordLength = null;
      this.score = null;
    }
  }
};
</script>

<style>
#app {
  text-align: center;
  padding: 20px;
}
</style>
