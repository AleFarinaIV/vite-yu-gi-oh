<script>
  import {store} from "./store.js"
  import axios from 'axios'
  import AppHeader from "./components/AppHeader.vue"
  import AppMain from "./components/AppMain.vue"

  export default {
    components: {
      AppHeader,
      AppMain,
    },

    created() {
      this.getCardsList();
      this.getArchetypeList();
    },

    methods: {
      getCardsList() {
        let cardUrl = `${store.apiUrl}${store.apiCard}`;
        
        if (store.cardArchetype && store.cardArchetype !== "Select an archetype" && store.cardArchetype !== "No archetype") {
          cardUrl += `&archetype=${store.cardArchetype}`;
        }

        axios.get(cardUrl).then((result) => {
          let cards = result.data.data;
          store.cardsList = cards;

          if (store.cardArchetype === "No archetype") {
            cards = cards.filter(card => !card.archetype)
            store.cardsList = cards;
          }
          console.log(store.cardsList)
          store.loading = false;
        })
        .catch((error) => {
          console.error("Error fetching cards list:", error);
        })
        .finally(() => {
          store.loading = false;
        });
      },

      getArchetypeList() {
        axios.get(`${store.apiUrl}${store.apiArchetypeUrl}`).then((result) => {
          store.archetypeList = result.data
          console.log(store.archetypeList)
          store.loading = false;
        })
      },
    },

    data() {
      return {
        store,
      }
    },
  }
</script>

<template>

    <header>
        <AppHeader />
    </header>

    <main>
        <AppMain @filter="getCardsList"/>
    </main>

</template>

<style>
@import "./styles/generals.scss"

</style>
