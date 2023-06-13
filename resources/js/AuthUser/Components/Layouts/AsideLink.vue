<template>
    <li>

          <span :class="{'route-active': currentRoute.includes($page.component) }"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

            <slot name="icon"></slot>
              <Link class="flex-1 ml-3 whitespace-nowrap" :href="link"><slot></slot></Link>
          </span>
    </li>
</template>

<script>
import {Link} from "@inertiajs/vue3";
export default {
    name: 'AsideLink',
    components: {Link},
    props: {
        link: {
            type: String
        },
        currentRoute: {
            type: Array
        },
    },

    setup(){

    }
}
</script>
<style scoped>

aside {
    width: 20%;
    height: 100vh;
}

main {
    width: 100%;
}
</style>
