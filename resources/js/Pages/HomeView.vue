<template>
    <div class="d-flex w-100">
      <div class="w-50 m-5 p-4 h-25" style=" border-radius: 15px; background: #f5f5f5;">
          <h3>Ostatnio używane fiszki</h3>
      </div>
      <div class="w-50 m-5 h-25" style=" border-radius: 15px; background: wheat;">

      </div>
    </div>
</template>


<script>
import {ref} from "vue";



export default {
  name: "Home",

  setup: function () {

    const message = ref('You are not logged in!')

    return {
      message,
    }
  },
}
</script>


