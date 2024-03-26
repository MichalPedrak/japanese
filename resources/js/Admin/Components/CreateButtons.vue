<template>
            <div class="mb-6 flex gap-5">
                <button @click.prevent="store.setShowModal('create-group', true)" class="text-white bg-primary hover:bg-primary-hover  focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Dodaj grupę</button>
                <button @click.prevent="store.setShowModal('create-card', true)" class="text-white bg-primary hover:bg-primary-hover  focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Dodaj fiszkę</button>
                <button @click.prevent="store.setShowModal('import-cards', true)" class="text-white bg-primary hover:bg-primary-hover  focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Zaimportuj fiszki</button>
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
