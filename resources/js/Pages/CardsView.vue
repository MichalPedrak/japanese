<template>

    <CardStep step="1" :store="store">
        <template #heading>Fiszki</template>
        <template #subheading></template>
        <Group class="py-3 sm:py-4 fadeIn" v-for="group in store.groups" :group="group" :key="group.id"></Group>
    </CardStep>

    <CardStep step="2" :store="store">
        <template #heading>Fiszki1</template>
        <template #subheading></template>





<!--        <cards @dragstart="startDrag($event, card)" draggable="true" class="py-3 sm:py-4 fadeIn" v-for="card in store.cards" :card="card" :key="card.id">{{ card.content }} - {{ card.definition}}</cards>-->
    </CardStep>

    <CardStep step="3" :store="store" >
        <template #heading>Fiszki2</template>
        <template #subheading></template>
        <CreateCard :store="store" :card="store.singleCard[0]" />
    </CardStep>

    <CardStep step="4" :store="store">
        <template #heading>Fiszki2</template>
        <template #subheading></template>
        <CreateGroup :store="store"></CreateGroup>
    </CardStep>


<!--    <div v-if="store.showStep == 5" class="relative mt-5 content w-75 text-center" style="background: lightblue; height: 250px; border-radius: 8px;">-->

<!--        <button class="z-10 absolute top-0 left-0 w-10 border h-10"  @click="store.changeStep(1)">&lt;</button>-->

<!--        <section class="border-gray-200 border relative bg-white dark:bg-gray-900">-->
<!--            <div class="py-8 px-4 mx-auto nphplg:py-16">-->

<!--                <h2>Fiszkii</h2>-->
<!--                <CreateButtons class="sa"></CreateButtons>-->

<!--                <div class="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">-->
<!--                    <div class="flex items-center justify-between mb-4">-->
<!--                        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Fiszki</h5>-->
<!--                        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">-->
<!--                            &lt;!&ndash;                    View all&ndash;&gt;-->
<!--                        </a>-->
<!--                    </div>-->
<!--                    <div  class="flow-root">-->
<!--                        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">-->
<!--                            DODAJ fiszkę-->
<!--                        </ul>-->
<!--                    </div>-->
<!--                </div>-->


<!--            </div>-->
<!--        </section>-->


<!--    </div>-->





</template>

<script>

import {onMounted, reactive, ref} from "vue";
import {useCardStore} from "../store/CardsStore.js";
import Cards from "@/Components/Cards.vue";
import CreateButtons from "@/Components/CreateButtons.vue";
import CardStep from "@/Pages/CardStep.vue";
import Group from "@/Components/Group.vue";
import CreateCard from "@/Pages/CreateCard.vue";
import CreateGroup from "@/Components/CreateGroup.vue";


export default {
  name: "CardsView.vue",
  components: {CreateGroup, CreateCard, CardStep, CreateButtons, Cards, Group, },
    // from interia render
    data() {
      return{
          myArray: [
              { name: "Angular", id:0 },
              { name: "React", id:1},
              { name: "Vue", id:2 },
              { name: "HTML", id:3 },
              { name: "CSS", id:4 },
              { name: "Sass", id:5},
          ],
      }

    },

  setup() {
      let store = useCardStore();


      onMounted(() => {
          store.getGroups();
          cards = store.cards;
      })



      let onEnd = (e) => {
          console.log(e)

          oldIndex.value = e.oldIndex;
          newIndex.value = e.newIndex;
      }

      let oldIndex = ref('')
      let newIndex = ref('')
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

    let cards = reactive(store.cards)



    let editedCardId = ref(null)

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

    return {
        onEnd,

      store,
      editCard,
      groupData,
      editedCardId,
      cardData,
      cards,
    }
  }
}
</script>

