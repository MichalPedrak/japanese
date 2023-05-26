<template>
            <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Dodaj nową grupę</h2>
            <div class="mb-6 flex gap-5">

<!--                <input v-model="groupData.title"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nazwa nowej grupy" required>-->
                <button @click.prevent="store.changeStep(4)" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Dodaj grupę</button>
                <button @click.prevent="store.changeStep(5)" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Dodaj fiszkę</button>

            </div>
</template>

<script setup>

import { useForm } from "@inertiajs/vue3";
import {useCardStore} from "@/store/CardsStore";


let groupData = useForm({
    title: "",
})
let store = useCardStore();

const addGroup = async () => {

    groupData.post('/admin/groups/store')
    groupData.title = '';
};

</script>

<style scoped>

</style>
