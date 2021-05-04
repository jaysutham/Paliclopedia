<template>
    <div class='resultbox'>
        <h1> {{name}} </h1>
        <p class='type'>{{type}}</p>

        <h2 class='description'> Description </h2>
        <p class='description'> {{description}} </p>

        <h2 class='list'> Ailment </h2>
        <li v-for='ail in ailment' :key='ail' class = 'list'>
            {{ail}}
        </li>

        <h2 class='list'> Resistance </h2>
        <li v-for='res in resistance' :key='res' class = 'list'>
            {{res}}
        </li>

        <h2 class='list'>Weakness</h2>
        <li v-for='weakness in weaknesses' :key='weakness' class='list'>
            {{weakness}}
        </li>

        <h2 class='list'>Location</h2>
        <li v-for='locale in locations' :key='locale' class='list'>
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