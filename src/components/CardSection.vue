<script>
import Card from "./Card.vue"

export default {
    components: {
        Card,
    },
    props: {
        card_section: Object
    },
}

</script>

<template>
    
    <div id="cards_section" class="content p-0">
        <Card v-for="image, index in card_section.card_images" :key="`img-${index}`" :card="card_section" :image="image" />
    </div>

</template>

<style scoped>


    .content {
        text-align: center;
        background-color: orange;
        width: 200px;
        margin-bottom: 20px;
    }

</style>