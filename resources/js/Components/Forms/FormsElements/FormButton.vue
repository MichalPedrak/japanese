<template>
    <button type="submit" class="submit gradient w-full text-white bg-main hover:bg-main focus:ring-4 focus:outline-none focus:ring-red-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"><div class="button-content"><slot /></div><div :class="{'loading': loading }" class="loader"></div></button>
</template>

<script>
import { ref } from 'vue'
export default {
    name: "FormButton",
    props: {
        loading: {
            type: String,
        },
    },
    setup(props) {


    }



}
</script>

<style scoped>
.bg-main{

}
</style>
