<template>

    <div class="layout">
        <aside>
            <button @click="showMenu = !showMenu" class="openMenu">
                <svg fill="none" stroke="currentColor" width="36" height="36" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                </svg>
            </button>

            <UserProfile/>

            <div class="menu px-3 pb-4 overflow-y-auto bg-white" :class="{'showMenu': showMenu }" >
                <button @click="showMenu = !showMenu" class="closeMenu">
                    <svg fill="none" stroke="currentColor" width="36" height="36" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                <ul class="space-y-2">
                    <AsideLink v-for="item in menu" :key="item.title" :currentRoute="item.currentRoute" :link="item.link">
                        <template #icon>
                            <span v-html="item.icon"></span>
                        </template>

                        {{ item.title }}

                    </AsideLink>
                </ul>
            </div>
        </aside>
        <main>
            <div class="box-wrapper">
                <div class="box">
                    <slot>

                    </slot>
                </div>
            </div>

        </main>
    </div>


</template>

<script>
import AsideLink from "@/AuthUser/Components/Layouts/AsideLink.vue";
import {ref} from "vue";
import UserProfile from "@/AuthUser/Components/Layouts/UserProfile.vue";

export default {
    name: "AuthLayout",
    components: {UserProfile, AsideLink},
    setup(){
        let showMenu = ref(false);
        const menu = [
            {
                title: 'Kokpit',
                link: '/',
                currentRoute: ['Dashboard'],
                icon: `
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                    </svg>
                `,
            },
            {
                title: 'Fiszki',
                link: '/fiszki',
                currentRoute: ['Cards', 'SingleCard'],
                icon: `
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                    </svg>
                `,
            },
            {
                title: 'Panel admina',
                link: '/admin',
                currentRoute: [],
                icon: `
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                    </svg>
                `,
            },
        ];

        return{
            showMenu,
            menu,
        }


    }

}
</script>

<style scoped>
.layout {
    display: flex;
    max-height: 100vh;
}

aside {
    width: 350px;
    height: 100vh;
}

main {
    overflow: hidden;
    width:100%;
    border-top-left-radius: 1em;
    background: #f6f6f6;
    padding: 10px 15px;
}

.box-wrapper{
    overflow-y: scroll !important;
    max-height: calc(100vh - 20px);
    border-radius: 1em;
    background: white;
    box-shadow: rgb(66 68 90 / 17%) 5px 5px 30px -10px;
}
.box{
    height: calc(100vh - 20px) !important;
    //padding: 15px
}
.openMenu, .closeMenu{
    display: none;

}

@media all and (max-width: 992px){
    main{
        border-top-right-radius: 1em;
        padding: 10px;
    }
    .layout{
        flex-wrap: wrap;
    }
    aside{
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
    }

    .menu{
        box-shadow: rgb(66 68 90 / 17%) 5px 5px 30px -10px;
        position: absolute;
        z-index: 10000;
        height: 100vh;
        width: 500px;
        padding-top: 100px;
        background: white;
        margin-left: -520px;
        transition: all 0.5s ease-in-out;
    }
    .showMenu{
        margin-left: 0px !important;
        transition: all 0.5s ease-in-out;
    }
    .openMenu, .closeMenu{
        display: block;
        padding: 24px;
    }
    .closeMenu{
        position: absolute;
        top: 0px;
        right: 0px;
    }

    .box-wrapper{
        max-height: calc(100vh - 120px);
    }
    .box{
        height: calc(100vh - 120px) !important;
    }
}


@media all and (max-width: 500px){
    .menu{
        width: 100%;
    }
}
</style>
