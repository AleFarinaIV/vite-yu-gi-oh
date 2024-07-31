<script>
import { store } from "../store.js"
import CardSection from "./CardSection.vue"
export default {
    components: {
        CardSection,
    },
    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    <div class="size">
        <div class="bg_black">
            <p>Found {{ store.cardsList.length }} cards</p>
        </div>
        <div id="cards_container" class="container pe-0">
            <div class="row justify-content-between me-0">
                <CardSection v-for="section in store.cardsList" :key="section.id" :card_section="section"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
