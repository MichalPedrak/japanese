import { defineStore } from 'pinia'
import axios from "axios";
import { router } from '@inertiajs/vue3'

export const useCardStore = defineStore('cardStore', {
    state: () => ({
        showStep: 1, // for what group show cards
        cards: {}, // get all cards
        singleCard: {}, // for what card get details
    }),

    setters: {

    },

    actions: {

        setCards(cards) {
            this.cards = cards
        },

        setSingleCard(singleCard) {
            this.singleCard = singleCard
        },

        changeStep(step) {
            this.showStep = step
        },


        setError(error) {
            this.error = error
        },

        setUser(user) {
            this.user = user
        },

        async getGroups(form){
            let updateError =  this.setError
            axios.post('/register', form)
                .then(function (response) {
                    console.log(response)
                    router.visit('/login')
                })
                .catch(function (errorResponse) {
                    // todo How improve displaying errors?
                    updateError(errorResponse.response.data.errors);

                });
        },

        async getCards(id){

            let setCards =  this.setCards
            let changeStep =  this.changeStep

            axios.get('/admin/cards/' + id, {
                headers: {
                    // 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                    'Content-type': 'application/json',

                }
            })
                .then(function (response) {
                  setCards(response.data)
                  changeStep(2)
                  console.log(response)
                })
                .catch(function (errorResponse) {
                    // todo How improve displaying errors?
                  console.log(errorResponse)
                });
        },

        async getSingleCard(id){

            let setSingleCard =  this.setSingleCard
            let changeStep =  this.changeStep

            axios.get('/admin/cards/single/' + id, {
                headers: {
                    // 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                    'Content-type': 'application/json',

                }
            })
                .then(function (response) {
                    setSingleCard(response.data)
                    changeStep(3)
                    console.log(response)
                })
                .catch(function (errorResponse) {
                    // todo How improve displaying errors?
                    console.log(errorResponse)
                });
        },

        async addGroup(form){
            let updateError =  this.setError
            axios.post('/register', form)
                .then(function (response) {
                    console.log(response)
                    router.visit('/login')
                })
                .catch(function (errorResponse) {
                    // todo How improve displaying errors?
                    updateError(errorResponse.response.data.errors);

                });
        },

        async addCard(form){
            let updateError =  this.setError
            axios.post('/register', form)
                .then(function (response) {
                    console.log(response)
                    router.visit('/login')
                })
                .catch(function (errorResponse) {
                    // todo How improve displaying errors?
                    updateError(errorResponse.response.data.errors);

                });
        },

        async editCard(form){
            let updateError =  this.setError
            axios.post('/register', form)
                .then(function (response) {
                    console.log(response)
                    router.visit('/login')
                })
                .catch(function (errorResponse) {
                    // todo How improve displaying errors?
                    updateError(errorResponse.response.data.errors);

                });
        },

        async deleteCard(form){
            let updateError =  this.setError
            axios.post('/register', form)
                .then(function (response) {
                    console.log(response)
                    router.visit('/login')
                })
                .catch(function (errorResponse) {
                    // todo How improve displaying errors?
                    updateError(errorResponse.response.data.errors);

                });
        }, // single card and all cards

    }

})
