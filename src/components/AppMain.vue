<script>
export default {

}

</script>

<template>
    <div class="size">
        <div class="bg_black">
            <p>Found 20 cards</p>
        </div>
        <div id="cards_container" class="container pe-0">
            <div class="row justify-content-between">
                <div class="content"></div>
                <div class="content"></div>
                <div class="content"></div>
                <div class="content"></div>
                <div class="content"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .size {
        width: 1200px;
        height: 1000px;
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
                    border: 1px solid black;
                    width: 200px;
                    height: 375px;
                    margin-bottom: 20px;
                }

                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
</style>
