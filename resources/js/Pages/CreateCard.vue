<template>


    <form @submit.prevent="store.addCard(card)" class="max-w-2xl mx-auto" >

        <h2 class="text-xl mx-auto my-10 text-center">
            Stwórz nową fiszkę
        </h2>
        <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
                <label for="content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pojęcie</label>
                <input v-model="card.content" type="text"  name="content" id="content" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" " required />
            </div>
            <div class="relative z-0 w-full mb-6 group">
                <label for="content_example" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Przykład</label>
                <input v-model="card.definition" type="text" name="content_example" id="content_example" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" " required />
            </div>
        </div>

        <div class="grid md:grid-cols-2 md:gap-6 ">
            <div class="relative z-0 w-full mb-6 group">
                <label for="floating_phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Definicja</label>
                <textarea v-model="card.content_example" type="text"  name="floating_phone" id="floating_phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" " required />
            </div>
            <div class="relative z-0 w-full mb-6 group">
                <label for="floating_company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Przykład definicji</label>
                <textarea v-model="card.definition_example" type="text" name="floating_company" id="floating_company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" " required />
            </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6 ">
            <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="card.group_id">
                <option disabled value="">Wybierz grupę</option>
                <option v-for="group in store.groups" :key="group.id" :value="group.id">{{ group.title }}</option>
            </select>

            <button  type="submit" class="text-white bg-primary hover:bg-primary-hover focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 my-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Dodaj</button>

        </div>

    </form>


</template>
<script>
export default {
  name: 'CreateCard',
    props:{
      store: {},
      card: {
          default: {
              'content': '',
              'content_example': '',
              'definition': '',
              'definition_example': '',
              'group_id': '',
          }
      },
    }
}
</script>
