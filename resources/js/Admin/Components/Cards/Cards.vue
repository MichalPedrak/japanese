<template>


    <div class="cards-table py-4  border-t groups fadeIn flex  justify-between drag-item">

        <div>
            <h3 class="w-75 text-start dark:text-white">{{ card.content }}</h3>
        </div>

        <div>
            <h3 class="w-75 text-start dark:text-white">{{card.definition}}</h3>
        </div>


        <div class="flex gap-16 edit-section">
            <button class="w-25 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900" @click.prevent="store.getSingleCard(card.id)"  >Edytuj fiszkę</button>

            <div class="cursor-pointer" @click="store.deleteCard(card)">
                <svg fill="none" stroke="currentColor" height="24" width="24" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                </svg>
            </div>


        </div>



</div>




</template>

<script setup>

import {useCardStore} from "@/store/CardsStore";

const store = useCardStore();


defineProps({
    card: Object,
});





</script>

<style scoped>
.cards-table div{
    width: 20%;
    text-align: start;
    display: flex;
    align-items: center;
}
.cards-table .edit-section{
    width: 30%;
    /*text-align: start;*/
    display: flex;
    justify-content: space-around;
}
</style>

