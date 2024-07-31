<script>
import { store } from "../store.js"
export default {
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
            <p>Found 20 cards</p>
        </div>
        <div id="cards_container" class="container pe-0">
            <div class="row justify-content-between">
                <div class="content p-0" v-for="card in store.cardsList" :key="card.id">
                    <img v-for="image, index in card.card_images" :key="`img-${index}`" :src="image.image_url" alt="">
                    <h5>{{ card.name }}</h5>
                    <p>{{ card.race }}</p>
                </div>
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

            .row {
                
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

                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
</style>
