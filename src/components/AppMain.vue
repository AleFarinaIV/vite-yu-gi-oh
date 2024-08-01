<script>
import { store } from "../store.js"
import CardSection from "./CardSection.vue"
import AppLoader from "./AppLoader.vue"
import axios from 'axios'
export default {
    components: {
        CardSection,
        AppLoader
    },
    created() {
        this.getArchetype()
    },
    methods: {
        getArchetype() {
            axios.get(`${store.apiUrl}${store.apiArchetypeUrl}`).then((result) => {
                store.archetypeList = result.data.slice(0, 10)
                console.log(store.archetypeList)
            })
        }
    },
    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    
    <div class="select_container">
        <div class="select_div">
            <select class="select_form" aria-label="Default select example" v-model="store.cardArchetype">
                <option v-for="archetype, i in store.archetypeList" :key="`${i}`"
                :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
            </select>
        </div>
    </div>

    <div class="size">
        <div class="bg_black">
            <p>Found {{ store.cardsList.length }} cards</p>
        </div>
        <div id="cards_container" class="container pe-0">
            <AppLoader v-if="store.loading" />
            <div class="row justify-content-between me-0" v-else>
                <CardSection v-for="section in store.cardsList" :key="section.id" :card_section="section"/>
            </div>
        </div>
    </div>

</template>

<style scoped>

    .select_container {
        width: 1200px;
        margin: 0 auto;
        .select_div {
            width: 200px;
            margin-left: 15px;
            margin-bottom: 30px;
            .select_form {
                width: 100%;
                padding: 5px;
                border-radius: 5px;
                border: none;
                background-color: white;
                color: black;
                cursor: pointer;
            }
        }
        
    }

    .size {
        width: 1200px;
        margin: 0 auto;
        padding: 45px;
        background-color: white;

        .bg_black {
            background-color: black;
            color: white;
            padding: 10px;
            p {
                margin: 0;
                font-weight: bold;
            }
        }
        
        #cards_container {
            margin: 0 auto;
        }
    }
</style>
