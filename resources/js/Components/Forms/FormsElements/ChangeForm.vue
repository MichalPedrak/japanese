<template>
    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
        <slot name="heading" />

        <a @click="$emit('toggleForm')" class="cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500">
            <slot name="button" />
        </a>
    </p>

</template>

<script>
export default {
    name: "ChangeForm",

}
</script>

<style scoped>

</style>
