<template>


    <teleport to="body">
        <div  class="fadeIn modal-wrapper absolute w-100 h-100 z-10 inset-0  flex justify-center content-center">
            <div class="modal">
                    <button @click="store.setShowModal('')" class="w-full ">
                        <svg class="ms-auto" fill="#36332c" stroke="black" height="30" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <slot></slot>
            </div>
        </div>
    </teleport>

</template>

<script setup>
import { ref } from 'vue'
// const isOpen = ref(false)
const props = defineProps(['step'])

import {useCardStore} from "../store/CardsStore.js";
let store = useCardStore();

</script>

<style scoped>
.modal-wrapper{
    display: flex;
    align-items: center;
    height: 100vh;
    z-index: 10000;
    background: rgba(0,0,0,0.5);
    position: fixed;

}

.modal{
    max-width: 800px;
    width: 100%;
    border-radius: 0.5rem;
    padding: 25px;
    min-height: 250px;
    padding-bottom: 60px !important;
    background: white;
}
</style>
