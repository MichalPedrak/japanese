<template>
    <Nav></Nav>
    <Aside></Aside>
      <div class="p-4 sm:ml-64 dark:bg-gray-900">
        <div class="p-4 border-1 border-gray-200  rounded-lg dark:border-gray-700 mt-20 fadeIn">
          <slot />
        </div>
      </div>
</template>

<script>


import Nav from "@/Admin/Components/Navigation/Nav.vue";
import Aside from "@/Admin/Components/Navigation/Aside.vue";
export default {
  name: "Layout",
    components: {Aside, Nav}
}
</script>

<style scoped>

.fadeIn{
    animation: fadeIn 1s;
}

@keyframes fadeIn {
    0% { opacity: 0;}
    /*0% { opacity: 0; transform: translate3d(0,-5%,0);}*/
    100% { opacity: 1; }
    /*100% { opacity: 1; transform: translate3d(0,0%,0);}*/
}
</style>
