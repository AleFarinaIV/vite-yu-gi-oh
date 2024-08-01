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
        let selectArchetype = `${store.apiUrl}${store.apiCard}`;
        
        if(store.cardArchetype !== "") {
          selectArchetype += `&archetype=${store.cardArchetype}`
        };

        axios.get(selectArchetype).then((result) => {
          store.cardsList = result.data.data
          store.loading = false;
        })
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
