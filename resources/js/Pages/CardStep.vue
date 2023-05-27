<template>


  <div v-if="store.showStep == step" class="relative mt-5 content w-75 text-center"
       style="background: lightblue; height: 250px; border-radius: 8px;">

      <button v-if='step > 1' class="z-10 absolute top-0 left-0 w-10 border h-10"  @click="store.changeStep(step-1)">&lt;</button>


      <section class="border-gray-200 border relative bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto nphplg:py-16">

        <h1 class="text-3xl"><slot name="heading"></slot></h1>
        <CreateButtons class="sa"></CreateButtons>

        <div
            class="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="flex items-center justify-between mb-4">
            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white"><slot name="subheading"></slot></h5>
          </div>
          <div class="flow-root">
            <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                <slot></slot>
            </ul>
          </div>
        </div>


      </div>
    </section>


  </div>
</template>
<script>
import CreateButtons from "@/Components/CreateButtons.vue"
import Group from "@/Components/Group.vue"

export default {
  name: 'CardStep',
  components: {CreateButtons},
  props: {
    step: null,
    store: {}
  }
}
</script>
