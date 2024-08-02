import {reactive} from 'vue';

export const store = reactive({
    apiUrl: "https://db.ygoprodeck.com/api/v7/",
    apiCard: "cardinfo.php?num=20&offset=0",
    cardsList: [],
    loading: true,
    apiArchetypeUrl: "archetypes.php",
    archetypeList: [],
    cardArchetype: "Select an archetype",
})