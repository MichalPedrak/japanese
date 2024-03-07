<template>
    <div class="flex relative">
       <div class="" style="overflow-x: hidden;">
            <div class="m-2 lg:m-12 mb-4 pb-4 mt-2 border-b ">
                <h1 class="text-4xl mb-1">
                    Hiragana
                </h1>
                <span class="text-xs  ml-1">
                    Kokpit / Fiszki / Hiragana
                </span>
            </div>


           <span>
           </span>
           <div class="xl:m-16 lg:m-8 m-1 flex flex-wrap items-center justify-center gap-5 card">


               <div class="changeTabButtons w-100 flex justify-start" style="width: 800px; ">
                   <button class="w-100 text-white focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-2 mr-2 mb-2 focus:outline-none dark:focus:ring-blue-800">Fiszki</button>
               </div>
               <div class="w-full flex flex-wrap justify-center ">
                   <div v-show="store.showSingleCard === card.order" :class="{'flip-card-rotate': rotate === true }" @click="rotate = !rotate" style="width: 800px; " class="fadeInTranslate girelative shadow-lg rounded-xl h-64 flip-card" v-for="card in cards.data" :key="card.id">
                       <div class="flip-card-front">

                           <span class="card-title">
                            {{ card.definition }}
                        </span>
                           <span class="card-example">
                            <div v-html="card.definition_example"></div>
                        </span>
                       </div>
                       <div class="flip-card-back">
                         <span class="card-title">
                            {{ card.content }}
                        </span>
                           <span class="card-example">
                            {{ card.content_example }}
                        </span>
                       </div>


                   </div>

               </div>
               <div class=" flex gap-12" style="width: 800px; margin-bottom: 60px !important;">
                   <button @click="changeStep('prev')" :class="{'disable': store.showSingleCard <= 1 }" class="w-1/2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                       &lt;
                   </button>

                   <button @click="changeStep('next')" :class="{'disable': store.showSingleCard  >= cards.data.length }" class="w-1/2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                       >
                   </button>

               </div>
           </div>
       </div>
        <CardsSidebar :cards="cards">
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
    setup(props){
        let rotate = ref(false);
        const store = useCardStore();

        let changeStep = (action) => {

            rotate.value = false;
            store.changeSingleCard(action)

        }
        let cards = props.cards;

        return{
            changeStep,
            store,
            rotate,
            cards,
        }
    }
}
</script>

<style scoped>
.card{
    //width: 80%;

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
    gap: 40px;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    padding: 15px;
}

.card-title{
    font-size: 80px;
    width: 100%;
    text-align: center;
}
.card-example{
    font-size: 32px;
}
.flip-card-back{
    transform: rotateY(180deg);
}
.cards-right-item{
    cursor: pointer;
}

.flip-card-rotate {
    transform: rotateY(180deg);
}

.card .changeTabButtons button{
    background: #ee3c20;
}

.fadeInTranslate{
    animation: 0.2s rotate;
}
@keyframes rotate {
    0%{
        opacity: 0;
        transform: rotate(10deg);
    }

    100%{
        opacity: 1;
        transform: rotate(0deg);
    }
}

@media all and (max-width: 1024px){
    .card{
        width: 100%;
    }
}
</style>
