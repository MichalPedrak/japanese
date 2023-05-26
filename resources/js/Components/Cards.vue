<template>



  <div class=" my-4 groups fadeIn flex  justify-between">


    <h3 class="w-75 text-start dark:text-white">{{ card.content }} - {{card.definition}}</h3>

    <button class="w-25 dark:text-white" @click.prevent="store.getSingleCard(card.id)">Edytuj fiszkę</button>



  </div>


</template>

<script setup>

import {useCardStore} from "../store/CardsStore";

const store = useCardStore();


defineProps({
    card: Object,
});





</script>

<style scoped>

</style>

