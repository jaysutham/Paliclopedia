<template>
    <div class='container mx-auto rounded-lg '>
        <div v-if="this.name" class="rounded-lg pt-1 mt-2 mb-2 mr-2 ml-2">
        <h1 class="text-4xl p-3 font-bold bg-brown text-gray-800 rounded-lg text-center">{{name}}</h1>
        <h1 class="text-2xl p-3 text-gray-800 rounded-lg text-center">{{type}}</h1>
        </div>
        <h1 class="text-4x1 p-3 text-center" v-else> Start searching and happy hunting!</h1>

        <div v-if="this.description" class="rounded-lg bg-lightbrown pt-1 mt-2 mb-2 mr-2 ml-2 p-3">
        <h2 v-if="this.description" class="text-2xl p-3 font-semibold rounded-lg  text-center text-gray-900 pb-3"> Description </h2>
        <p v-if="this.description" class=" text-left rounded-lg p-4 text-gray-800 "> {{description}} </p>
        </div>

        <div v-if="this.ailment" class="rounded-lg bg-lesslightbrown pt-1 mt-2 mb-2 pb-3 mr-2 ml-2 p-3">
        <h2 class="text-2xl p-3 font-semibold rounded-lg text-gray-900 text-center"> Ailment </h2>
        <li v-for='ail in ailment' :key='ail' class="font-semibold text-left list-none p-2 text-gray-800 inline-flex">
            {{ail}}
        </li>
        </div>

        <div v-if='this.resistance' class="rounded-lg bg-lightbrown pt-1 mt-2 mb-2 pb-3 mr-2 ml-2 p-3">
        <h2  class="text-2xl p-3 font-semibold rounded-lg text-gray-900 text-center "> Resistance </h2>
        <li v-for='res in resistance' :key='res' class ="font-semibold  text-left list-none p-2 text-gray-800 inline-flex">
            {{res}}
        </li>
        </div>


        <div v-if="this.weaknesses" class="rounded-lg bg-lesslightbrown pt-1 mt-2 mb-2 pb-3 mr-2 ml-2">
        <h2 class="text-2xl p-3 font-semibold text-gray-900 text-center ">Weakness</h2>
        <li v-for='weakness in weaknesses' :key='weakness' class="font-semibold text-left list-none pl-4 p-3 text-gray-800 inline-flex ">
            {{weakness}}
        </li>
        </div>

        <div v-if='this.locations' class="rounded-lg bg-lightbrown pt-1 mt-2 mb-10 pb-3 mr-2 ml-2">
        <h2 class="text-2xl p-3 font-semibold  rounded-lg text-gray-900 text-center">Locations</h2>
        <li v-for='locale in locations' :key='locale' class="font-semibold text-bold text-left list-none pl-4 p-1 text-gray-800 inline-flex">
            {{locale}}
        </li>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "result",
    props: {
        search: String,
        value: String
    },
    methods: {
        fetchMonster(){
            axios.get('/lookup/'+this.search)
            .then((res) => {
                this.name = res.data.name
                this.type = res.data.type
                this.description = res.data.description
                this.weaknesses = res.data.weakness
                this.resistance = res.data.resistance
                this.ailment = res.data.ailment
                this.locations = res.data.location
            })
        },
    },
    data() {
        return{
        name: "",
        type: "",
        description: "",
        resistance: "",
        weaknesses: "",
        ailment: "",
        locations: "",
        }
    },
}
</script>


<style>
</style>