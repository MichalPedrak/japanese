<template>
    <div class="flex flex-wrap gap-x-5 relative">

    <div class="w-full rounded-2xl bg-secondary">
        <h1 class="text-5xl font-bold py-8 px-5">
            Japoński
        </h1>
    </div>
    <div class="m-5 overflow-hidden cards-categories-wrapper">
        <ul class="flex gap-2 cards-categories">
            <li class="border-black border border-radius-main selected">Polecane</li>
            <li class="border-black border border-radius-main"><svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"></path>
            </svg>
                Moje&nbsp;fiszki</li>
            <li class="border-black border border-radius-main"><svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"></path>
            </svg>
                Popularne</li>
            <li class="border-black border border-radius-main"><svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"></path>
            </svg>
                Premium</li>
        </ul>
    </div>
    <ul class="flex flex-wrap groups w-full lg:m-5 " >
        <li class="group flex" v-for="(group, index) in store.groups" :key="group.id">
            <div class="w-full px-3 py-3 border border-black rounded-xl flex gap-x-5 gap-y-2 flex-nowrap  justify-between">
            <div class="flex align-center">
                <img style="object-fit: contain" :src="images[index]">
            </div>
            <div class="flex flex-wrap gap-3  items-center justify-end ">
                <div class="flex flex-wrap p-y-5 w-50  ">
                    <h3 class="w-full text-3xl flex items-center group-title">
                        {{ group.title }}
                    </h3>
                    <div>

                    </div>
                </div>
                <Link class=" w-full flex justify-end whitespace-nowrap" :href="'/fiszki/' + group.id">
                    <button class="w-32 bg-main w-100 text-white  font-medium rounded-lg text-sm px-6 py-2 focus:outline-none dark:focus:ring-blue-800">
                        Więcej
                        <!--                   <a :href="'/fiszki/' + group.id" class="btn btn-primary">Przeglądaj fiszki</a>-->
                    </button>
                </Link>

            </div>


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
        const images = [
            'https://upload.wikimedia.org/wikipedia/commons/5/58/Japanese_Hiragana_kyokashotai_ZA.svg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Japanese_Katakana_kyokashotai_KA.svg/240px-Japanese_Katakana_kyokashotai_KA.svg.png',
            'https://cdn-icons-png.flaticon.com/512/547/547562.png',
         ]
        const store = useCardStore();
        store.getGroups();
        return{
            store,
            selectedColor,
            attrs,
            images,
        }
    },
}
</script>



<style scoped>
.group-title{
    text-align: end;
}
.cards-categories{
    display: flex;
    overflow: auto;
}
.cards-categories::-webkit-scrollbar {
    width: 4px !important;
}

.cards-categories::-webkit-scrollbar{
    height: 0px;


}
.cards-categories .selected{
    background: var(--primary-color);
    color: white !important;
    border: 1px solid var(--primary-color);
}
.cards-categories li{
    display: flex;
    gap: 5px
}
.cards-categories svg{

    height: 20px;
}
.groups{
    width: 100%;
    gap: 2%;
}
.group{
    width: 49%;
    margin-bottom: 20px;
}
 img {
    max-width: 80px;
}
@media all and (max-width: 1024px){


    .groups li{
        width: 100%;
    }
}
</style>
