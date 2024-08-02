<script>
export default {

    props: {
        card_section: Object
    },
}

</script>

<template>
    
    <div class="col h-col">
        <div class="content">
            <img :src="card_section.card_images[0].image_url" alt="">
            <h5>{{ card_section.name }}</h5>
            <p>{{ card_section.archetype }}</p>
        </div>
    </div>

</template>

<style scoped>

    .content {
        text-align: center;
        background-color: orange;
        margin-bottom: 20px;
        height: 470px;

        img {
            width: 100%;
        }
    
        h5 {
            margin-top: 25px;
            color: white;
        }

        p {
            margin-top: 20px;
        }
    }


</style>