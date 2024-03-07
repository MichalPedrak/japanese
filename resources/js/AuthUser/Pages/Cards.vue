<template>
    <div class="flex flex-wrap gap-x-5 relative">

    <div class="baner mb-12 rounded-2xl">
        <h1 class="text-5xl font-bold py-16 px-5 text-white">
            Fiszki
        </h1>
    </div>
    <ul class="flex flex-wrap gap-12" style="width: 80%;">
        <li class="w-full" v-for="group in store.groups" :key="group.id">
            <div class="w-full h-48 p-10 card-shadow rounded-xl flex gap-12">
                <div class="flex">
                    <img width="100" style="object-fit: contain" src="https://cdn-icons-png.flaticon.com/512/7051/7051035.png">
                </div>
                <div class="flex flex-wrap p-5 w-50">
                    <h3 class="w-full text-xl">
                        {{ group.title }}
                    </h3>
                    <div>
                         <span>
                             Tutaj będzie znajdować się opis naszych fiszek
                        </span>
                        <CardsStatus/>

                    </div>
                 </div>
                <Link class="flex-1 ml-3 whitespace-nowrap" :href="'/fiszki/' + group.id">Przeglądaj fiszki</Link>
<!--                <div class="flex">-->
<!--                   <a :href="'/fiszki/' + group.id" class="btn btn-primary">Przeglądaj fiszki</a>-->
<!--                </div>-->

            </div>
        </li>
    </ul>
    <div class="sticky top-5" style="width: 18%; background: white;">
        <div class="text-white shadow-lg p-5 rounded-xl bg-white sticky top-5 bg-emerald-300" >
                info banner
        </div>
    </div>

    </div>
</template>

<script>
import {useCardStore} from "@/store/CardsStore";
import {ref} from "vue";
import CardsStatus from "@/AuthUser/Pages/CardsStatus.vue";
import {Link} from "@inertiajs/vue3";
export default {
    name: "Cards",
    components: {CardsStatus, Link},
    display: "Fiszki",

    setup(){
        const selectedColor = ref('blue');
        const attrs = ref([
            {
                key: 'test',
                highlight: true,
                dates: { start: new Date(2019, 3, 15), end: new Date(2019, 3, 19) },
            }
        ]);
        const store = useCardStore();
        store.getGroups();
        return{
            store,
            selectedColor,
            attrs,
        }
    },
}
</script>

<style scoped>
.baner {
    background: url("/resources/images/baner.svg");
    object-fit: contain !important;
    width: 100% !important;
    background-repeat: round;
}
</style>
