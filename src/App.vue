<template>
  <img alt="Vue logo" src="./assets/MHlogo.png" id="mainlogo">
  <Title msg="Keep calm and Hunt On!"/>
  <input class='searchfield' placeholder="monster name" v-model="this.searchInput"   @keyup.enter="$refs.child.fetchMonster()">
  <Result v-bind:search='this.searchInput' ref="child"/>
</template>

<script>
import Title from './components/title.vue'
import Result from './components/result.vue'

export default {
  name: 'App',
  components: {
    Title,
    Result
  },
  methods: {
  },
  data(){
    return {
      searchInput: '',
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#mainlogo{
  max-height: 20%;
  max-width: 20%;
}
</style>
