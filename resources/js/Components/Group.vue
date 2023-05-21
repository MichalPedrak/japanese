<template>



  <div class=" my-4 groups fadeIn flex  justify-between">


    <h3 class="w-75 text-start dark:text-white">{{ group.title }}</h3>

    <button v-if="!hasCards" class="w-25 dark:text-white" @click.prevent="getCards(group.id)">Pokaż fiszki</button>
<!--    <button v-else class="w-25 " @click.prevent="hideCards(group)">Schowaj fiszki</button>-->

    <div v-if="hasCards" class="w-100 fadeIn" >
        Fiszki tutaj
    </div>


      <div v-if='showModal' class="top-0 left-0 h-full w-full absolute bg-slate-400">
          'test'
      </div>

  </div>


</template>

<script setup>
import { ref} from "vue";
let hasCards = ref(false)
let showModal = ref(false)

defineProps({
    group: Object,
});



const getCards = async (id) => {


    showModal.value = true


    const response = await fetch('/admin/cards/' + id, {
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
    })


    console.log(response)


};



</script>

<style scoped>

</style>

