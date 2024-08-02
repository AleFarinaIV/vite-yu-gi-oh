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
    
    <div id="select_container" class="container">
        <div class="row">
            <div class="col-12">
                <div class="select_div">
                    <select class="select_form" aria-label="Default select example" v-model="store.cardArchetype" @change="selectArchetype">
                        <option value="Select an archetype">Select an archetype</option>
                        <option value="No archetype">No archetype</option>
                        <option v-for="archetype, i in store.archetypeList" :key="`${i}`"
                        :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
                    </select>
                </div>
            </div>
        </div>
    </div>

    <div id="size" class="container p-5">
        <div class="row">
            <div class="col-12">
                <div class="bg_black">
                    <p>Found {{ store.cardsList.length }} cards</p>
                </div>
            </div>
        </div>
        <div id="cards_container" class="col-12">
            <AppLoader v-if="store.loading" />
            <div id="my_row" class="row row-cols-5" v-else>
                <CardSection v-for="section in store.cardsList" :key="section.id" 
                :card_section="section"/>
            </div>
        </div>
    </div>

</template>

<style scoped>

    #select_container {

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

    #size {
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
        
        #my_row:first-child {
            min-height: 400px;
        }
    }
</style>
