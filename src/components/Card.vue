<script>
export default {

    props: {
        card: Object,
        image: Object
    }
}


</script>

<template>

    <img :src="image.image_url" alt="">
    <h5>{{ card.name }}</h5>
    <p>{{ card.race }}</p>

</template>

<style scoped>

img {
    width: 200px;
    object-fit: cover;
}
h5 {
    margin-top: 10px;
    color: white;
}

</style>
