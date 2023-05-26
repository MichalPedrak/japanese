<template>



  <div class=" my-4 groups fadeIn flex  justify-between">


    <h3 class="w-75 text-start dark:text-white">{{ group.title }}</h3>

    <button class="w-25 dark:text-white" @click.prevent="store.getCards(group.id)">Pokaż fiszki</button>



  </div>


</template>

<script setup>
import { ref} from "vue";
import {useCardStore} from "../store/CardsStore";

const store = useCardStore();
let hasCards = ref(false)
let showModal = ref(false)


defineProps({
    group: Object,
});





</script>

<style scoped>

</style>

