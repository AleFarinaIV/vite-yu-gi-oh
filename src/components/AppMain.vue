<script>
import { store } from "../store.js"
import CardSection from "./CardSection.vue"
import AppLoader from "./AppLoader.vue"

export default {
    components: {
        CardSection,
        AppLoader
    },
    methods: {
        selectArchetype() {
            this.$emit('filter')
        }
    },
    data() {
        return {
            store
        }
    },
}

</script>

<template>
    
    <div class="select_container">
        <div class="select_div">
            <select class="select_form" aria-label="Default select example" v-model="store.cardArchetype" @change="selectArchetype">
                <option value="Select an archetype">Select an archetype</option>
                <option value="No archetype">No archetype</option>
                <option v-for="archetype, i in store.archetypeList" :key="`${i}`"
                :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
            </select>
        </div>
    </div>

    <div class="size">
        <div class="bg_black">
            <p>Found {{ store.cardsList.length }} cards</p>
        </div>
        <div id="cards_container" class="container p-0">
            <AppLoader v-if="store.loading" />
            <div class="row justify-content-around " v-else>
                <CardSection v-for="section in store.cardsList" :key="section.id" 
                :card_section="section"/>
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
