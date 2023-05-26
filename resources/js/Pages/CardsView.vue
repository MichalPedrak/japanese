<template>

    <div v-if="store.showStep == 1" class="relative mt-5 content w-75 text-center" style="background: lightblue; height: 250px; border-radius: 8px;">

        <section class="border-gray-200 border relative bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto nphplg:py-16">

            <h2>Fiszkii</h2>
        <CreateGroup class="sa"></CreateGroup>

        <div class="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex items-center justify-between mb-4">
                <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Grupy fiszek</h5>
                <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
<!--                    View all-->
                </a>
            </div>
            <div  class="flow-root">
                <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                    <Group class="py-3 sm:py-4 fadeIn" v-for="group in groups" :group="group" :key="group.id"></Group>
                </ul>
            </div>
        </div>


    </div>
        </section>


    </div>
    <div v-if="store.showStep == 2" class="relative mt-5 content w-75 text-center" style="background: lightblue; height: 250px; border-radius: 8px;">

        <button class="z-10 absolute top-0 left-0 w-10 border h-10"  @click="store.changeStep(1)">&lt;</button>

        <section class="border-gray-200 border relative bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto nphplg:py-16">

                <h2>Fiszkii</h2>
                <CreateGroup class="sa"></CreateGroup>

                <div class="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex items-center justify-between mb-4">
                        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Fiszki</h5>
                        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                            <!--                    View all-->
                        </a>
                    </div>
                    <div  class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                            <cards class="py-3 sm:py-4 fadeIn" v-for="card in store.cards" :card="card" :key="card.id">{{ card.content }} - {{ card.definition}}</cards>
                        </ul>
                    </div>
                </div>


            </div>
        </section>


    </div>
    <div v-if="store.showStep == 3" class="relative mt-5 content w-75 text-center" style="background: lightblue; height: 250px; border-radius: 8px;">

        <button class="z-10 absolute top-0 left-0 w-10 border h-10"  @click="store.changeStep(2)">&lt;</button>

        <section class="border-gray-200 border relative bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto nphplg:py-16">

                <h2>Fiszkii</h2>
                <CreateGroup class="sa"></CreateGroup>

                <div class="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex items-center justify-between mb-4">
                        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Fiszki</h5>
                        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                            <!--                    View all-->
                        </a>
                    </div>
                    <div  class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                            <input v-model="store.singleCard[0].content">
                            <input v-model="store.singleCard[0].content_example">
                            <input v-model="store.singleCard[0].definition">
                            <input v-model="store.singleCard[0].definition_example">
                        </ul>
                    </div>
                </div>


            </div>
        </section>


    </div>
</template>

<script>

import Group from "@/Components/Group.vue";
import {reactive, ref} from "vue";
import CreateGroup from "@/Components/CreateGroup.vue";
import {useCardStore} from "../store/CardsStore.js";
import Cards from "@/Components/Cards.vue";

export default {
  name: "CardsView.vue",
  components: {Cards, CreateGroup, Group},
    // from interia render
    props:{
        groups: Array,
    },

  setup() {
    let store = useCardStore();
    let groups = ref("")





    let cardData = reactive({

      title: '',
      content: '',
      group_id: '',
      content_example: '',
      definition: '',
      definition_example: '',

    })

     let groupData = reactive({

       title: '',

     })
    let cards = ref(null)

    let editedCardId = ref(null)

      //
      // const getCards = async (id) => {
      //
      //     const response = await fetch('/admin/cards/' + id, {
      //         headers: {'Content-Type': 'application/json'},
      //         credentials: 'include',
      //     })
      //
      //
      //     console.log(response)
      //
      //     // let group = groups.value.find(item => item.id === id)
      //     // group.cards = await response.json();
      //
      // };


      // const getGroups = async () => {
         //
         //   const response = await fetch('http://localhost:8000/api/groups', {
         //     headers: {'Content-Type': 'application/json'},
         //     credentials: 'include',
         //   })
         //
         //   groups.value = await response.json();
         //
         //
         // };



     // const addGroup = async () => {
     //
     //   await fetch('/admin/groups/store', {
     //     method: 'POST',
     //     headers: {'Content-Type': 'application/json'},
     //     credentials: 'include',
     //     body: JSON.stringify(groupData)
     //   })
     //
     //   groupData.title = '';
     //
     //
     //
     //   // getCards();
     //
     // };

     const addCard = async () => {

      console.log(cardData)

       await fetch('http://localhost:8000/api/cards/store', {
         method: 'POST',
         headers: {'Content-Type': 'application/json'},
         credentials: 'include',
         body: JSON.stringify(cardData)
       })





     };

     const editCard = async (card) => {
       const cartId = card.id;
       await fetch('http://localhost:8000/api/cards/update/' + cartId, {
         method: 'PATCH',
         headers: {'Content-Type': 'application/json'},
         credentials: 'include',
         body: JSON.stringify(card)
       })

       editedCardId.value = null;

       // getCards();
     };

     const deleteCard = async (id) => {

       await fetch('http://localhost:8000/api/cards/destroy/' + id, {
         method: 'DELETE',
         headers: {'Content-Type': 'application/json'},
         credentials: 'include',

       })


     };


    const toggleEdit =  (id) => {
       if(id){
         editedCardId.value = id;
       } else {
         editedCardId.value = null
         // getCards();
       }

    };

    const clickEdit = (id) => {
      return
     };







    return {
        store,
      deleteCard,
      clickEdit,
      editCard,
      toggleEdit,
      groupData,
      editedCardId,
      addCard,
      cardData,

      cards,




    }
  }
}
</script>

<style scoped>

</style>
