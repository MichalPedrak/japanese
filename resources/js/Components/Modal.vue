<template>
    <button @click="isOpen = true"> Open </button>

    <teleport to="body">
        <div @click="isOpen = false" v-if="isOpen" class="absolute w-100 h-100 z-10 inset-0 bg-amber-500 flex justify-center content-center">
            <div style="width: 500px; height: 500px">
                    <slot></slot>
            </div>
        </div>
    </teleport>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)

</script>

<style scoped>

</style>
