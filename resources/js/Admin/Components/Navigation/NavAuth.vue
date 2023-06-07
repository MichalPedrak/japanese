<template>
  <header class="w-100 position-fixed top-0 d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
    <a href="/public" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-4">Simple header</span>
    </a>

    <ul class="nav nav-pills">
      <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link">Rejestruj</a></li>


    </ul>
  </header>

</template>

<script>
import { useAuthStore } from '../../../store'
import {reactive} from "vue";
import {router} from "@inertiajs/vue3";


export default {
  name: "NavAuth",
  setup(){

    const store = useAuthStore()
    const auth = reactive(JSON.parse(store.user))



      const logout = async () => {
        await fetch('http://localhost:8000/api/logout', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
        })
        await store.logout()
        await router.push('/');
      };


    return{
      auth,
      // logout
    }
  }
}
</script>

<style scoped>

</style>
