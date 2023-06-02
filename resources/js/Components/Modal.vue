<template>


    <teleport to="body">
        <div class="modal-wrapper absolute w-100 h-100 z-10 inset-0  flex justify-center content-center">
            <div class="modal">
                    <button @click="store.setShowModal('')">x</button>
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

}

.modal{
    max-width: 800px;
    width: 100%;
    border-radius: 0.5rem;
    padding: 25px;
    min-height: 500px;
    background: white;
}
</style>
