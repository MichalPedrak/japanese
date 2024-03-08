<template>
    <div class="flex flex-wrap gap-x-5 relative">

    <div class="baner mb-12 rounded-2xl">
        <h1 class="text-5xl font-bold py-16 px-5 text-white">
            Fiszki
        </h1>
    </div>
    <ul class="flex flex-wrap gap-12 groups" >
        <li class="w-50" v-for="group in store.groups" :key="group.id">
            <div class="w-full p-5 card-shadow rounded-xl flex gap-x-5 gap-y-2 flex-wrap">
            <div class="w-50">
                <img  style="object-fit: contain" src="https://cdn-icons-png.flaticon.com/512/7051/7051035.png">

            </div>

                <div class="flex flex-wrap p-5 w-50">
                    <h3 class="w-full text-3xl flex content-center">
                        {{ group.title }}
                    </h3>
                    <div>

                    </div>
                 </div>
<!--                <div class="flex">-->
                <button class="w-full bg-red-main w-100 text-white focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-2 mr-2 mb-2 focus:outline-none dark:focus:ring-blue-800">
                     <Link class="flex-1 ml-3 whitespace-nowrap" :href="'/fiszki/' + group.id">Przeglądaj fiszki</Link>
                <!--                   <a :href="'/fiszki/' + group.id" class="btn btn-primary">Przeglądaj fiszki</a>-->
                </button>
<!--                </div>-->

            </div>
        </li>
    </ul>
<!--    <div class="sticky top-5" style="width: 18%; background: white;">-->
<!--        <div class="text-white shadow-lg p-5 rounded-xl bg-white sticky top-5 bg-emerald-300" >-->
<!--                info banner-->
<!--        </div>-->
<!--    </div>-->

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

.groups{
    width: 100%;
}
.card-shadow img {
    max-width: 100px;
}
@media all and (max-width: 1024px){


    .groups li{
        width: 100%;
    }
}
</style>
