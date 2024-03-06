<template>

    <form @submit.prevent class="max-w-2xl mx-auto">

        <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
                <label for="content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Wklej fiszki do importu</label>
                <input v-model="form.title" type="text"  name="content" id="content" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" " required />
            </div>


        <div class="grid md:grid-cols-2 md:gap-6">

            <button @click="store.addGroup(form)" v-if="store.showModal == 'create-group'" type="submit" class="text-white bg-primary hover:bg-primary-hover focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Importuj</button>

        </div>


    </form>

</template>

<script>
import {reactive, ref} from "vue";
import {useCardStore} from "../../../store/CardsStore.js";


export default {
    name: "CreateGroup",
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


        let form = JSON.parse(JSON.stringify(store.singleGroup));

        return{
            form,
            store,
        }
    }

}
</script>

<style scoped>

</style>
