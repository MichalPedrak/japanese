<template>
    <div class="relative">
        <label :for="name"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><slot /></label>
        <input :class="{'border-red-600': error }" @input="$emit('update:modelValue', $event.target.value)" :value="modelValue" :type="input" :id="id" :name="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="placeholder" required="">
        <span style="bottom: -15px" v-if="error" class="text-red-500 text-xs absolute">{{ error[0] }}</span>
    </div>
</template>

<script>
import { defineProps } from 'vue';
export default {
    name: "InputForm",
    props: {
        error: {
            type: String,
        },
        input: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
        },
        name: {
            type: String,
        },
        id: {
            type: String,
        },
        modelValue: {
            type: String,
        },

    },
    emits: ['update:modelValue'],

}
</script>

<style scoped>

</style>
