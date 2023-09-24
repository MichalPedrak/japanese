<template>
    <div class="flex relative">
       <div class="m-2 lg:m-12 mb-12" style="overflow-x: hidden;">
           <h1 class="text-4xl mt-10 mb-8">
               Hiragana
           </h1>
           <div class="lg:m-32 flex flex-wrap items-center justify-center gap-5 card">


               <div class="changeTabButtons w-100 flex justify-start" style="width: 800px;">
                   <button class="w-100 text-white focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-2 mr-2 mb-2 focus:outline-none dark:focus:ring-blue-800">Fiszki</button>
               </div>
               <div class="w-full flex flex-wrap justify-center ">
                   <div v-show="store.showSingleCard === card.order" :class="{'flip-card-rotate': rotate === true }" @click="rotate = !rotate" style="width: 800px;" class="fadeIn girelative shadow-lg rounded-xl h-96 flip-card" v-for="card in cards.data" :key="card.id">
                       <div class="flip-card-front">
                        <span class="card-title">
                            {{ card.content }}
                        </span>
                           <span class="card-example">
                            {{ card.content_example }}
                        </span>
                       </div>
                       <div class="flip-card-back">
                        <span class="card-title">
                            {{ card.definition }}
                        </span>
                           <span class="card-example">
                            {{ card.definition_example }}
                        </span>
                       </div>


                   </div>

               </div>
               <div class=" flex gap-12" style="width: 800px;">
                   <button @click="changeStep('prev')" :class="{'disable': store.showSingleCard <= 1 }" class="w-1/2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                       &lt;
                   </button>

                   <button @click="changeStep('next')" :class="{'disable': store.showSingleCard  >= cards.data.length }" class="w-1/2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                       >
                   </button>

               </div>
           </div>
       </div>
        <CardsSidebar>
        </CardsSidebar>

    </div>

</template>

<script>
import {ref} from "vue";
import {useCardStore} from "@/store/CardsStore";
import CardsSidebar from "@/AuthUser/Components/Sidebars/CardsSidebar.vue";
export default {
    name: "SingleCard",
    components: {CardsSidebar},
    props: {
        cards: [],

    },
    setup(){
        let rotate = ref(false);
        const store = useCardStore();

        let changeStep = (action) => {

            rotate.value = false;
            store.changeSingleCard(action)

        }

        return{
            changeStep,
            store,
            rotate,
        }
    }
}
</script>

<style scoped>
.card{
    width: 80%;
}
.disable{
    background: #a0aec0;
    pointer-events: none;
}
.flip-card{
    transition: transform 0.6s;
    transform-style: preserve-3d;

}


.flip-card-front, .flip-card-back {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;
    gap: 80px;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    padding: 15px;
}

.card-title{
    font-size: 36px;
    width: 100%;
    text-align: center;
}

.flip-card-back{
    transform: rotateY(180deg);
}

.flip-card-rotate {
    transform: rotateY(180deg);
}

.card .changeTabButtons button{
    background: #ee3c20;
}

@media all and (max-width: 992px){
    .card{
        width: 100%;
    }
}
</style>
