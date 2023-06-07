
<script>

import {onMounted, reactive, ref} from "vue";
import {useCardStore} from "@/store/CardsStore.js";
import CreateButtons from "@/Admin/Components/CreateButtons.vue";

import CardStep from "@/Admin//Components/CardStep.vue";

import Cards from "@/Admin/Components/Cards/Cards.vue";
import CreateCard from "@/Admin/Components/Cards/CreateCard.vue";
import CardHeading from "@/Admin/Components/Cards/CardHeading.vue";

import Group from "@/Admin/Components/Groups/Group.vue";
import CreateGroup from "@/Admin/Components/Groups/CreateGroup.vue";
import GroupHeading from "@/Admin/Components/Groups/GroupHeading.vue";

import draggable from "vuedraggable";
import Modal from "@/Admin/Components/Modal.vue";



export default {
    name: "CardsView.vue",
    components: {
        CardHeading,
        GroupHeading, Modal, CreateGroup, CreateCard, CardStep, CreateButtons, Cards, Group, draggable},
    // from interia render
    data() {
        return {

            enabled: true,
            list: [
                { name: "John", id: 0 },
                { name: "Joao", id: 1 },
                { name: "Jean", id: 2 }
            ],

            dragging: false
        };
    },

    setup() {

        let store = useCardStore();


        let list1 = ref([
            { name: "John", id: 0 },
            { name: "Joao", id: 1 },
            { name: "Jean", id: 2 }
        ])

        list1 = ref(store.cards);


        onMounted(() => {
            store.getGroups();
            cards = ref(store.cards);
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



        const onChange = (e) => {

            console.log(e)

            let item = e.moved;

            if (!item) return;


            let index = item.newIndex;
            let prevCard = store.cards[index - 1];
            let nextCard = store.cards[index + 1];
            let card = store.cards[index];

            console.log({ prevCard, nextCard})


            let position = card.position;
            // if (prevCard && nextCard) {
            //     position = (prevCard.position + nextCard.position) / 2;
            //     console.log(1, position)
            // } else if (prevCard) {
            //     position = prevCard.position + (prevCard.position / 2);
            //     console.log(2, position)
            // } else if (nextCard) {
            //     position = nextCard.position / 2;
            //     console.log(3, position)
            // }
            //


            if (prevCard && nextCard) { // ok
                console.log(nextCard.position, prevCard.position);
                position = (prevCard.position + nextCard.position) / 2;
                console.log(1, position)
            } else if (prevCard) {
                console.log(prevCard.position);
                position = prevCard.position - (prevCard.position / 2);
                console.log(2, position)
            } else if (nextCard) {
                console.log(nextCard.position);
                position = nextCard.position + (nextCard.position / 2);
                console.log(3, position)
            }


            console.log(4, position)

            store.cards[index].position = position;

            store.moveCard({
                card_id: card.id,
                position: position,
            });

        }



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
            onChange,
            onEnd,
            list1,
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

<template>


    <CardStep step="1" :store="store">
        <template #heading>Fiszki</template>
        <template #subheading></template>
        <GroupHeading></GroupHeading>
        <Group class="py-3 sm:py-4 fadeIn" v-for="group in store.groups" :group="group" :key="group.id"></Group>


    </CardStep>

    <CardStep step="2" :store="store" class="cards">
        <template #heading>Fiszki1</template>
        <template #subheading></template>

        <CardHeading></CardHeading>
        <draggable
            v-model="store.cards"
            :disabled="!enabled"
            item-key="name"
            class="list-group"
            ghost-class="ghost"
            drag-class="drag1"
            @start="dragging = true"
            @end="dragging = false"
            @change="onChange"
        >

                <template #item="{ element }" >
                        <cards :card="element" :key="element.id">{{ element.title }}</cards>
                </template>

        </draggable>


<!--        <cards @dragstart="startDrag($event, card)" draggable="true" class="py-3 sm:py-4 fadeIn" v-for="card in store.cards" :card="card" :key="card.id">{{ card.content }} - {{ card.definition}}</cards>-->
    </CardStep>

<!--    <CardStep step="3" :store="store" >-->
<!--        <template #heading>Fiszki2</template>-->
<!--        <template #subheading></template>-->

<!--     -->


<!--    </CardStep>-->

    <Modal v-if="store.showModal == 'create-card' || store.showModal == 'edit-card'">
        <CreateCard :card="store.singleCard[0]" />
    </Modal>

    <Modal v-if="store.showModal == 'create-group' || store.showModal == 'edit-group' " >
        <CreateGroup></CreateGroup>
    </Modal>



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

<style>
.sortable-chosen .drag-item {
    /*transform: rotate(5deg);*/
    /*transformX: 10px;*/

}
.ghost {
    background: lightgray;
    border-radius: 6px;
}
.ghost > div {
    visibility: hidden;
}

.cards .list-group{
    border: none;
}
</style>
