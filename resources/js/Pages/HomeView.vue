<template>

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


