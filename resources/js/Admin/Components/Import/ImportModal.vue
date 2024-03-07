<template>

    <form @submit.prevent class="max-w-2xl mx-auto import-form">

        <div class="grid md:grid-cols-1 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
                <label for="content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Wklej fiszki do importu</label>
                <textarea v-model="form.import" type="text"  name="content" id="content" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" " required />
            </div>


        <div class="grid md:grid-cols-2 md:gap-6">
            <select v-model="form.group_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option disabled value="">Wybierz grupę</option>
                <option v-for="group in store.groups" :key="group.id" :value="group.id">{{ group.title }}</option>
            </select>
            <button @click="store.importCards(form)" v-if="store.showModal == 'import-cards'" type="submit" class="text-white bg-primary hover:bg-primary-hover focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Importuj</button>

        </div>
        </div>


    </form>

</template>

<script>
import {reactive, ref} from "vue";
import {useCardStore} from "../../../store/CardsStore.js";


export default {
    name: "importModal",
    // props: {
    //     store: {},
    //     group: {
    //         default: {
    //             title: '',
    //             level: '',
    //         }
    //     },
    // },
    setup(){
        let store = useCardStore();


        let form = {import: ""};

        return{
            form,
            store,
        }
    }

}
</script>

<style scoped>
    .import-form textarea{
        height: 300px;
    }
</style>
