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
                    <AsideLink @click="showMenu = !showMenu" v-for="item in menu" :key="item.title" :currentRoute="item.currentRoute" :link="item.link">
                        <template #icon>
                            <span v-html="item.icon"></span>
                        </template>

                        {{ item.title }}

                    </AsideLink>
                    <div @click="logout" class="cursor-pointer flex items-center mr-5 p-4">
                        <span class="mr-3">Wyloguj się</span>
                    </div>
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
    <footer>
        <div @click="fullscreen" class="go-full-screen absolute bottom-0 right-0" style="z-index: 100000000;">
            <svg fill="#36332c" enable-background="new 0 0 40 40" height="40" viewBox="0 0 124 124" width="40" xmlns="http://www.w3.org/2000/svg"><g id="Layer_19"><g><path d="m40 17h-20c-1.6567059 0-3 1.3432999-3 3v20c0 1.6567001 1.3432941 3 3 3 1.6566944 0 3-1.3432999 3-3v-17h17c1.6566925 0 3-1.3432999 3-3s-1.3433075-3-3-3z"/><path d="m80 17h-20c-1.6567078 0-3 1.3432999-3 3s1.3432922 3 3 3h17v17c0 1.6567001 1.3432922 3 3 3 1.6566925 0 3-1.3432999 3-3v-20c0-1.6567001-1.3433075-3-3-3z"/><path d="m40 77h-17v-17c0-1.6567001-1.3433056-3-3-3-1.6567059 0-3 1.3432999-3 3v20c0 1.6567001 1.3432941 3 3 3h20c1.6566925 0 3-1.3432999 3-3s-1.3433075-3-3-3z"/><path d="m79.9784927 56.7020988c-.0009995 0-.0018997 0-.0034027 0-1.6567001.0020027-2.998497 1.3462029-2.9965973 3.0035019l.018097 17.2943993h-16.9965897c-1.6567078 0-3 1.3432999-3 3s1.3432922 3 3 3h20c.7963943 0 1.5595932-.3163986 2.1225891-.8798981.5625-.5630035.8784103-1.3271027.8774109-2.1235046l-.0215073-20.2978973c-.0018997-1.6557007-1.3442001-2.9966012-3-2.9966012z"/></g></g></svg>
        </div>

    </footer>

</template>

<script>
import AsideLink from "@/AuthUser/Components/Layouts/AsideLink.vue";
import {ref} from "vue";
import UserProfile from "@/AuthUser/Components/Layouts/UserProfile.vue";
import {useAuthStore} from "@/store";
import {router} from "@inertiajs/vue3";
import axios from "axios";
export default {
    name: "AuthLayout",
    components: {UserProfile, AsideLink},
    setup(){

        function fullscreen() {
            var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
                (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
                (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
                (document.msFullscreenElement && document.msFullscreenElement !== null);

            var docElm = document.documentElement;
            if (!isInFullScreen) {
                if (docElm.requestFullscreen) {
                    docElm.requestFullscreen();
                } else if (docElm.mozRequestFullScreen) {
                    docElm.mozRequestFullScreen();
                } else if (docElm.webkitRequestFullScreen) {
                    docElm.webkitRequestFullScreen();
                } else if (docElm.msRequestFullscreen) {
                    docElm.msRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
        }

        let showMenu = ref(false);
        const menu = [
            // {
            //     title: 'Kokpit',
            //     link: '/',
            //     currentRoute: ['Dashboard'],
            //     icon: `
            //         <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            //             <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
            //         </svg>
            //     `,
            // },
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
            // {
            //     title: 'Panel admina',
            //     link: '/admin',
            //     currentRoute: [],
            //     icon: `
            //         <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            //             <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
            //         </svg>
            //     `,
            // },

        ];
        let store = useAuthStore();
        const logout = async () => {

            await store.logout()

        };


        return{
            logout,
            showMenu,
            menu,
            fullscreen
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
    border-radius: 1em;
    background: #f6f6f6;
    padding: 10px 15px;
}

.box-wrapper{
    overflow-y: auto !important;
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
@media all and (min-width: 1300px){
    .go-full-screen{
        display: none;
    }
}
@media all and (max-width: 1024px){
    main{
        border-top-right-radius: 1em;
        padding: 5px;
    }
    .layout{
        flex-wrap: wrap;
    }
    aside{
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-between;
    }

    .menu{
        box-shadow: rgb(66 68 90 / 17%) 5px 5px 30px -10px;
        position: absolute;
        z-index: 10000;
        height: 100vh;
        width: 350px;
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
        padding: 10px 10px 0px 10px;
        max-height: calc(100vh - 140px);
    }
    .box{
        height: calc(100vh - 160px) !important;
    }
}


@media all and (max-width: 300px){
    .menu{
        width: 100%;
    }
}
</style>
