<template>
        <div class="m-32 flex flex-wrap items-center justify-center gap-5"  style=" width: 80%;">
            <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Fiszki</button>
            <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Ucz się </button>
            <div class="w-full flex flex-wrap justify-center ">
                <div v-show="store.showSingleCard === card.order" :class="{'flip-card-rotate': rotate === true }" @click="rotate = !rotate" style="width: 500px;" class="fadeIn girelative shadow-lg rounded-xl h-96 flip-card" v-for="card in cards.data" :key="card.id">
                    <div class="flip-card-front">
                        <span>
                            {{ card.content }}
                        </span>
                        <span>
                            {{ card.content_example }}
                        </span>
                    </div>
                    <div class="flip-card-back">
                        <span>
                            {{ card.definition }}
                        </span>
                        <span>
                            {{ card.definition_example }}
                        </span>
                    </div>


                </div>

            </div>
            <div class="w-1/2 flex gap-12">
                <button @click="store.changeSingleCard('prev')" :class="{'disable': store.showSingleCard <= 1 }" class="w-full p-5 bg-amber-300 rounded-xl">
                    &lt;
                </button>

                <button @click="store.changeSingleCard('next')" :class="{'disable': store.showSingleCard  >= cards.data.length }" class="w-full p-5 bg-sky-300 rounded-xl">
                    >
                </button>

            </div>
        </div>

</template>

<script>
import {ref} from "vue";
import {useCardStore} from "@/store/CardsStore";
export default {
    name: "SingleCard",
    props: {
        cards: [],

    },
    setup(){
        let rotate = ref(false);
        const store = useCardStore();
        return{
            store,
            rotate,
        }
    }
}
</script>

<style scoped>
.disable{
    background: #a0aec0;
    pointer-events: none;
}
.flip-card{
    transition: transform 0.6s;
    transform-style: preserve-3d;
}


.flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    padding: 15px;
}

.flip-card-back{
    transform: rotateY(180deg);
}

.flip-card-rotate {
    transform: rotateY(180deg);
}
</style>
