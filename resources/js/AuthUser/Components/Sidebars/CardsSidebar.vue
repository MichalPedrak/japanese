<template>
    <div class="category-prompts-sidebar-wrapper">
        <div class="category-prompts-sidebar">
            <div class="category-prompts-sidebar-close" @click="closeSidebar" v-show="!isClosedSidebar">
                <svg fill="none" stroke="currentColor" stroke-width="1.5" height="24" width="24" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </div>

            <div class="category-prompts-sidebar-close" @click="openSidebar" v-show="isClosedSidebar">
                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                </svg>
            </div>
            <h2 class="category-prompts-sidebar-title"></h2>
            <div class="category-prompts-container">

            </div>
        </div>
    </div>
</template>

<script>

import {ref} from "vue";

export default {
    name: "CardsSidebar",


    setup(){
        let isClosedSidebar = ref(false);

        let closeSidebar = function (){
            let sidebar = document.querySelector('.category-prompts-sidebar');
            let sidebarWrapper = document.querySelector('.category-prompts-sidebar-wrapper');
            sidebar.classList.add('category-prompts-sidebar-hide');
            sidebarWrapper.classList.add('category-prompts-sidebar-wrapper-hide');
            isClosedSidebar.value = true;
        }

        let openSidebar = function (){
            let sidebar = document.querySelector('.category-prompts-sidebar');
            let sidebarWrapper = document.querySelector('.category-prompts-sidebar-wrapper');
            sidebar.classList.remove('category-prompts-sidebar-hide');
            sidebarWrapper.classList.remove('category-prompts-sidebar-wrapper-hide');
            isClosedSidebar.value = false;
            //testaccpimtswtocj32
        }

        return{
            closeSidebar,
            openSidebar,
            isClosedSidebar,
        }
    },
}
</script>

<style scoped>


    .category-prompts-sidebar-wrapper {
        max-width: 525px !important;
        width: 100% !important;
        transition: all 0.3s;
        top: 10px;
        position: relative;
        right: 10px;
    }
    .category-prompts-sidebar {
        position: fixed;
        top: 10px;
        border-radius: 10px;
        right: 0px;
        width: 350px;
        margin-right: 20px;
        height: calc(100% - 20px);
        padding: 25px;
        background-color: white;
        box-shadow: rgb(66 68 90 / 17%) 5px 5px 30px -10px;
        border-width: 0px 0px 0px 1px;
        border-color: rgba(0, 0, 0, 0.1);
        transition: right 0.3s ease-in-out;
        overflow-y: auto;
        transition: all 0.3s;
        z-index: 9999999;
    }

  .category-prompts-sidebar-hide {
      margin-right: -30px;
      right: 50px;
      width: 80px;
      transition: all 0.3s;
      overflow: hidden;
    }

    .category-prompts-sidebar-wrapper-hide {
        max-width: 80px !important;
        transition: all 0.3s;
    }

    @media all and (max-width: 600px){
        .category-prompts-sidebar {
            right: -600px;
            width: 100%;
        }
    }
    @media all and (max-width: 500px){
        .category-prompts-sidebar {
            right: -500px;
        }
    }
    @media all and (max-width: 400px){
        .category-prompts-sidebar {
            right: -400;
        }
    }

    .category-prompts-container {
        padding: 20px;
    }

    .category-prompts-sidebar.show {
        right: 0;
    }

    .category-prompts-sidebar-close, .category-prompts-sidebar-open{
        user-select: none;
        max-width: 29px;
        cursor: pointer;
    }

    .category-prompts-sidebar::-webkit-scrollbar {
        width: 6px;
    }

    .category-prompts-sidebar::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 3px;
    }

    .category-prompts-sidebar::-webkit-scrollbar-thumb:hover {
        background-color: #aaa;
    }

    .category-prompts-sidebar::-webkit-scrollbar-track {
        background-color: transparent;
    }

</style>
