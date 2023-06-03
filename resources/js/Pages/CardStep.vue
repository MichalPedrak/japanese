<template>


  <div v-if="store.showStep == step" class="relative mt-5 content w-75 text-center ">

      <button v-if='step > 1' class="grid content-center justify-center rounded-lg z-10 absolute top-0 left-0 w-10 border h-10"  @click="store.changeStep(step-1)">
          <svg fill="none" height="20" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
          </svg>
      </button>


      <section class="border-gray-200 border relative bg-white dark:bg-gray-900 rounded-lg ">
      <div class="py-8 px-4 mx-auto nphplg:py-16">

        <h1 class="text-3xl"><slot name="heading"></slot></h1>
        <CreateButtons class="sa"></CreateButtons>

        <div class="w-full  p-4 bg-white sm:p-8 dark:bg-gray-800 dark:border-gray-700">

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
