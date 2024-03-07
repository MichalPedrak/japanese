<template>
    <div class="cards-right-sidebar-wrapper cards-right-sidebar-wrapper-hide">
        <div class="cards-right-sidebar cards-right-sidebar-hide">
            <div class="cards-right-sidebar-close" @click="closeSidebar" v-show="!isClosedSidebar">
                <svg fill="none" stroke="currentColor" stroke-width="1.5" height="24" width="24" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </div>

            <div class="cards-right-sidebar-close" @click="openSidebar" v-show="isClosedSidebar">
                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                </svg>
            </div>
            <h2 class="cards-right-sidebar-title"></h2>
            <div class="cards-right-container" >

                <div class="cards-right-item" v-for="card in cards.data" :class="{active: store.showSingleCard === card.order}"  @click="[store.changeSingleCard('changeSidebar', card.order), closeSidebar(true)]">
                    <span>{{ card.content }}</span>
                    <span> - </span>
                    <span>{{ card.definition }}</span>
<!--                    <span>定義</span>-->
                </div>

            </div>
        </div>
    </div>
</template>

<script>

import {ref} from "vue";
import {useCardStore} from "@/store/CardsStore";

export default {
    name: "CardsSidebar",
    props: {
        cards: [],
    },
    setup(props){
        const store = useCardStore();

        let isClosedSidebar = ref(true);
        // if(window.innerWidth < 1024){
        //     let sidebar = document.querySelector('.cards-right-sidebar');
        //     let sidebarWrapper = document.querySelector('.cards-right-sidebar-wrapper');
        //     sidebar.classList.add('cards-right-sidebar-hide');
        //     sidebarWrapper.classList.add('cards-right-sidebar-wrapper-hide');
        //     isClosedSidebar.value = true;
        // }

        let hideSidebarOnMobile = function(){
            if(window.innerWidth < 1024 ){
                let sidebar = document.querySelector('.cards-right-sidebar');
                let sidebarWrapper = document.querySelector('.cards-right-sidebar-wrapper');
                sidebar.classList.add('cards-right-sidebar-hide');
                sidebarWrapper.classList.add('cards-right-sidebar-wrapper-hide');
                isClosedSidebar.value = true;
            }
        }
        window.addEventListener("resize", (event) => {
            hideSidebarOnMobile()
        });
        window.addEventListener("load", (event) => {
            hideSidebarOnMobile()
        });

        let closeSidebar = function (closeByChange = null){

            if(closeByChange == true && window.innerWidth > 1024 ){
                return;
            }

            let sidebar = document.querySelector('.cards-right-sidebar');
            let sidebarWrapper = document.querySelector('.cards-right-sidebar-wrapper');
            sidebar.classList.add('cards-right-sidebar-hide');
            sidebarWrapper.classList.add('cards-right-sidebar-wrapper-hide');
            isClosedSidebar.value = true;
        }

        let openSidebar = function (){
            let sidebar = document.querySelector('.cards-right-sidebar');
            let sidebarWrapper = document.querySelector('.cards-right-sidebar-wrapper');
            sidebar.classList.remove('cards-right-sidebar-hide');
            sidebarWrapper.classList.remove('cards-right-sidebar-wrapper-hide');
            isClosedSidebar.value = false;
            //testaccpimtswtocj32
        }

        let cards = props.cards

        return{
            closeSidebar,
            openSidebar,
            isClosedSidebar,
            store,
            cards
        }
    },
}
</script>

<style scoped>


    .cards-right-sidebar-wrapper {

        overflow: clip;
        max-width: 350px;
        width: 100% !important;
        transition: all 0.3s;
        top: 10px;
        position: relative;
        right: 10px;
    }

    @media all and (max-width: 1300px){
        .cards-right-sidebar-wrapper {

            max-width: 80px !important;
        }

    }
    @media all and (max-width: 1024px){
        .cards-right-sidebar-wrapper{
            position: fixed;
            max-width: 100% !important;
            inset: unset;
            bottom: 0px !important;
            left: 0px !important;
            height: 50px !important;
            background: white;
            display: flex;
            justify-content: space-between;
        }
        .cards-right-sidebar-hide {
            transition: all 0s !important;
            border-width: 0px !important;
            margin: 10px;
            width: 50px !important;
            padding: 10px !important;
            box-shadow: none !important;
            position: static !important;
            height: 50px !important;
        }
    }




    .cards-right-sidebar {
        position: fixed;
        top: 10px;
        border-radius: 10px;
        right: 0px;
        width: 350px;
        margin-right: 20px;
        height: calc(100% - 20px);
        padding: 25px;
        background-color: white;
        //background-color: #f6f6f6;
        box-shadow: rgb(66 68 90 / 17%) 5px 5px 30px -10px;
        border-width: 0px 0px 0px 1px;
        border-color: rgba(0, 0, 0, 0.1);
        transition: right 0.3s ease-in-out;
        overflow-y: auto;
        transition: all 0.3s;
        z-index: 9999999;
    }

  .cards-right-sidebar-hide {
      margin-right: -30px !important;
      right: 50px;
      width: 80px;
      transition: all 0.3s;
      overflow: hidden;
    }
    .cards-right-sidebar-hide .cards-right-item{
        //animation: fadeOut  1s ;
        opacity: 0%;
    }
    .cards-right-sidebar-hide .cards-right-container{
        animation: fadeOut  1s ;
        //opacity: 0%;
    }
    .cards-right-sidebar-wrapper-hide {
        max-width: 80px;
        transition: all 0.3s;
        margin-right: unset;
    }

    @media all and (max-width: 1024px){
        .cards-right-sidebar {
            //opacity: 0%;
            right: 0px;
            width: 100%;
            display: block;
            position: fixed;
            z-index: 19999999;
            top: 0px;
            left: 0px;
            height: 100%;
            transition: unset;
            border-radius: 0px;
            margin-top: 0px;
        }

        .cards-right-container{

            animation: fadeIn 1s;

        }


    }

    @keyframes fadeOut {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
    .cards-right-container {
        padding: 20px;
    }

    .cards-right-sidebar.show {
        right: 0;
    }

    .cards-right-sidebar-close, .cards-right-sidebar-open{
        user-select: none;
        max-width: 29px;
        cursor: pointer;
    }

    .cards-right-sidebar::-webkit-scrollbar {
        display: none;
        //width: 6px;
    }

    .cards-right-sidebar::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 3px;
    }

    .cards-right-sidebar::-webkit-scrollbar-thumb:hover {
        background-color: #aaa;
    }

    .cards-right-sidebar::-webkit-scrollbar-track {
        background-color: transparent;
    }
    .cards-right-item{
        font-size: 14px;
        margin: 15px 0px;
        border-radius: 10px;
        background: white;
        padding: 15px;
        display: flex;
        justify-content: space-between;
        border: 1px solid #f5f5f5;
        //box-shadow: rgb(66 68 90 / 17%) 5px 5px 30px -10px;

    }
    .cards-right-item__active{
        background: #f6f6f6;
    }
    .cards-right-item{
        cursor: pointer;
    }
    .cards-right-item.active{
        background: #f5f5f5;
    }
</style>
