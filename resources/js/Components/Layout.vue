<template>
        <Nav></Nav>
        <Aside></Aside>
      <div class="p-4 sm:ml-64 dark:bg-gray-900">
        <div class="p-4 border-1 border-gray-200  rounded-lg dark:border-gray-700 mt-20">
          <slot />
        </div>
      </div>
</template>

<script>


import Nav from "@/Components/Nav.vue";
import Aside from "@/Components/Aside.vue";
export default {
  name: "Layout",
    components: {Aside, Nav}
}
</script>

<style scoped>

</style>
