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
                        <div class="flex gap-5">
                            <div class="my-3 text-white shadow rounded-xl py-1 px-4" style="background: #7dd3fc">
                                Ilość fiszek: 15
                            </div>
                            <div class="my-3 text-white shadow rounded-xl py-1 px-4" style="background: #bef264">
                                Fiszki umiem: 10
                            </div>
                            <div class="my-3 text-white shadow rounded-xl py-1 px-4" style="background: #fb7185">
                                Do nauki: 5
                            </div>
                        </div>

                    </div>
                 </div>
                <div class="flex">
                   <button>Przeglądaj fiszki</button>
                </div>

            </div>
        </li>
    </ul>
    <div class="sticky top-5 " style="width: 18%; background: white;">
        <div class="text-white shadow-lg p-5 rounded-xl bg-white sticky top-5 bg-emerald-300" >
s
        </div>
    </div>

    </div>
</template>

<script>
import {useCardStore} from "@/store/CardsStore";
import Group from "@/Admin/Components/Groups/Group.vue";

export default {
    name: "Cards",
    components: {Group},
    display: "Fiszki",

    setup(){

        const store = useCardStore();
        store.getGroups();
        return{
            store
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
