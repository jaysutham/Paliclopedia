<template class="bg-blue-400">
  <img alt="Vue logo" src="./assets/cutePali.webp" class="object-contain h-48 w-full">
  <Title msg="Paliclopedia"/>
  <input class="hover:border-gray-600  shadow appearance-none border rounded py-2 px-3 text-grey-darker" placeholder="monster name" v-model="this.searchInput"   @keyup.enter="$refs.child.fetchMonster()">
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
