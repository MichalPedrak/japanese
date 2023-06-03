<template>

    <form @submit.prevent="store.addGroup(form)" class="max-w-2xl mx-auto">

        <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
                <label for="content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nazwa grupy</label>
                <input v-model="form.title" type="text"  name="content" id="content" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" " required />
            </div>
            <div>
                <label for="content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Wybierz kurs</label>
                <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option disabled value="">Wybierz kurs</option>
                    <option>KURS 1</option>
                </select>
            </div>

        </div>

        <div class="grid md:grid-cols-2 md:gap-6">
            <div></div>
            <button  type="submit" class="text-white bg-primary hover:bg-primary-hover focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Dodaj</button>

        </div>

    </form>

</template>

<script>
import {reactive} from "vue";

export default {
    name: "CreateGroup",
    props: {
        store: {},
        group: {
            default: {
                title: '',
                level: '',
            }
        },
    },
    setup(){
        let form = reactive({
            title: '',
            level: '',
        })

        return{
            form,
        }
    }

}
</script>

<style scoped>

</style>
