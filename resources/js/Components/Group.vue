<template>



  <div class="my-4 groups fadeIn flex  justify-between">
    <h3 class="w-75 text-start dark:text-white">{{ group.title }}</h3>

    <button v-if="!hasCards" class="w-25 dark:text-white" @click.prevent="getCards(group)">Pokaż fiszki</button>
    <button v-else class="w-25 " @click.prevent="hideCards(group)">Schowaj fiszki</button>

    <div v-if="hasCards" class="w-100 fadeIn" >
        Fiszki tutaj
    </div>


  </div>

</template>

<script setup>
import { ref} from "vue";
let hasCards = ref(false)

defineProps({
    group: Object,
});




</script>

<style scoped>

</style>

