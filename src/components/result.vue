<template>
    <div class='container mx-auto'>
        <p class="text-4xl p-3 font-bold"> {{name}} </p>
        <p class="text-2xl p-3 font-thin">{{type}}</p>

        <h2 class="text-2xl p-3 font-thin bg-gray-100 antialiased"> Description </h2>
        <p class="bg-gray-100 text-left p-4 antialiased"> {{description}} </p>

        <h2 class="text-2xl p-3 font-thin bg-gray-200"> Ailment </h2>
        <li v-for='ail in ailment' :key='ail' class="bg-gray-200 text-left list-none p-4">
            {{ail}}
        </li>

        <h2 class="text-2xl p-3 font-thin bg-gray-100"> Resistance </h2>
        <li v-for='res in resistance' :key='res' class ="bg-gray-100 text-left list-none p-4">
            {{res}}
        </li>

        <container class="mb-4">
        <h2 class="text-2xl p-3 font-thin bg-gray-200 ">Weakness</h2>
        <li v-for='weakness in weaknesses' :key='weakness' class="bg-gray-200 text-left list-none">
            {{weakness}}
        </li>
        </container>
        

        <h2 class="text-2xl p-3 font-thin bg-gray-100">Location</h2>
        <li v-for='locale in locations' :key='locale' class="bg-gray-200 text-left list-none ">
            {{locale}}
        </li>
       

    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: "result",
    props: {
        search: String
    },
    methods: {
        fetchMonster(){
            axios.get('/lookup/'+this.search)
            .then((res) => {
                console.log(res)
                this.name = res.data.name
                this.type = res.data.type
                this.description = res.data.description
                this.weaknesses = res.data.weakness
                this.resistance = res.data.resistance
                this.ailment = res.data.ailment
                this.locations = res.data.location
            })
        },

        filter(string){
            let result = string.replace('"', '')
            return result
        }
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
.resultbox{
    padding: 50px;
    border: 0cm;
}
.description{
    text-align: left;
}

.list{
    text-align: left;
}
    
</style>