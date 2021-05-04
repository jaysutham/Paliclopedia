<template>
    <div class='container mx-auto'>
        <container v-if="this.name">
        <h1 class="text-4xl p-3 font-bold">{{name}}</h1>
        <h1 class="text-2xl p-3 font-thin">{{type}}</h1>
        </container>
        <h1 class="text-4x1 p-3 text-center" v-else> Start searching and happy hunting!</h1>


        <h2 v-if="this.description" class="text-2xl p-3 font-normal bg-gray-100 antialiased   "> Description </h2>
        <p v-if="this.description" class="bg-gray-100 text-left p-4 antialiased "> {{description}} </p>

        <h2 v-if='this.ailment' class="text-2xl p-3 font-normal bg-gray-200"> Ailment </h2>
        <li v-for='ail in ailment' :key='ail' class="bg-gray-200 text-left list-none p-2">
            {{ail}}
        </li>

        <h2 v-if='this.resistance' class="text-2xl p-3 font-normal bg-gray-100"> Resistance </h2>
        <li v-for='res in resistance' :key='res' class ="bg-gray-100 text-left list-none p-2">
            {{res}}
        </li>


        <h2 v-if='this.weaknesses' class="text-2xl p-3 font-normal bg-gray-200 ">Weakness</h2>
        <li v-for='weakness in weaknesses' :key='weakness' class="bg-gray-200 text-left list-none pl-4 p-1">
            {{weakness}}
        </li>
        

        <h2 v-if='this.locations' class="text-2xl p-3 font-normal bg-gray-100">Locations</h2>
        <li v-for='locale in locations' :key='locale' class="bg-gray-200 text-left list-none pl-4 p-1 ">
            {{locale}}
        </li>
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