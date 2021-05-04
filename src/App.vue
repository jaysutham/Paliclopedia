<template class="bg-blue-400">
  <img alt="Vue logo" src="./assets/og-image.webp" class="object-contain h-48 w-full">
  <Title msg="Paliclo"/>
  <Multiselect 
  class="multiselect"
  searchable=true
  :options="this.options"
  placeholder="Search by name..."
  v-model.lazy="searchInput"
  @search-change="this.getTheDamnMonster"
  />
  <!-- <input class="hover:border-gray-600  shadow appearance-none border rounded py-2 px-3 text-grey-darker text-center" placeholder="Search by name..." v-model="this.searchInput"   @keyup.enter="$refs.child.fetchMonster()"> -->
  <Result v-bind:search='this.searchInput' ref="child"/>
</template>

<script>
import Title from './components/title.vue'
import Result from './components/result.vue'
import Multiselect from '@vueform/multiselect'
import axios from 'axios'


export default {
  name: 'App',
  components: {
    Title,
    Result,
    Multiselect,
  },
  methods: {
    fetchNames(){
      axios.get('/lookup').then((res) => {
        this.options = res.data
      })
    },
    getTheDamnMonster(){
      this.searchInput = 
      this.$refs.child.fetchMonster()
    },
  },
  created(){
    this.fetchNames()
  },
  data(){
    return {
      searchInput: '',
      options:['1'],
      value: '',
      selected: '',
    }
  }
}
</script>


<style src="@vueform/multiselect/themes/default.css">
</style>