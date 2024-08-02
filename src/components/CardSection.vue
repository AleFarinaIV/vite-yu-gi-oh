<script>
export default {

    props: {
        card_section: Object
    },
}

</script>

<template>
    
    <div id="cards_section" class="content p-0">
        <img :src="card_section.card_images[0].image_url" alt="">
        <h5>{{ card_section.name }}</h5>
        <p>{{ card_section.archetype }}</p>
    </div>

</template>

<style scoped>

    .content {
        text-align: center;
        background-color: orange;
        width: 200px;
        margin-bottom: 20px;
        
        img {
            width: 200px;
            object-fit: cover;
        }
    
        h5 {
            margin-top: 10px;
            color: white;
        }
    }


</style>