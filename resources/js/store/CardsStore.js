import { defineStore } from 'pinia'
import axios from "axios";
import { router } from '@inertiajs/vue3'

export const useCardStore = defineStore('cardStore', {
    state: () => ({
        groups: {},
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


        setGroups(groups) {
            this.groups = groups
        },

        setSingleCard(singleCard) {
            this.singleCard = singleCard
        },

        changeStep(step, resetSingleCard = false) {

            if(resetSingleCard){
                this.singleCard = {};
            }

            this.showStep = step
        },


        setError(error) {
            this.error = error
        },

        setUser(user) {
            this.user = user
        },

        // async getGroups(form){
        //     let updateError =  this.setError
        //     axios.post('/register', form)
        //         .then(function (response) {
        //             console.log(response)
        //             router.visit('/login')
        //         })
        //         .catch(function (errorResponse) {
        //             // todo How improve displaying errors?
        //             updateError(errorResponse.response.data.errors);
        //
        //         });
        // },

        async getGroups(){

            let setGroups =  this.setGroups
            let changeStep =  this.changeStep

            axios.get('/admin/groups/show', {
                headers: {
                    // 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                    'Content-type': 'application/json',

                }
            })
                .then(function (response) {
                    setGroups(response.data)
                    // changeStep(1)
                    console.log(response)

                })
                .catch(function (errorResponse) {
                    // todo How improve displaying errors?
                    console.log(errorResponse)
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
                    return response.data;
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

            let changeStep =  this.changeStep
            let getGroups =  this.getGroups

            axios.post('/admin/groups/store', form)
                .then(function (response) {

                    getGroups()
                    changeStep(1)
                    console.log(response)

                })
                .catch(function (errorResponse) {
                    // todo How improve displaying errors?
                   console.log(errorResponse)

                });
        },

        async addCard(form){

            let changeStep =  this.changeStep
            let getCards =  this.getCards

            axios.post('/admin/cards/store', form)
                .then(function (response) {


                    changeStep(2)
                    console.log(response)

                })
                .catch(function (errorResponse) {
                    // todo How improve displaying errors?
                    console.log(errorResponse)

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

        async deleteCard(card){

            let getCards =  this.getCards

            axios.delete('/admin/cards/destroy/' + card.id, {})
                .then(function (response) {
                    console.log(card.id)

                    getCards(card.group_id)

                })
                .catch(function (errorResponse) {
                    // todo How improve displaying errors?
                    console.log(errorResponse);

                });
        }, // single card and all cards

        async deleteGroup(group){

            let getGroups =  this.getGroups

            axios.delete('/admin/groups/destroy/' + group.id, {})
                .then(function (response) {

                    getGroups()

                })
                .catch(function (errorResponse) {
                    // todo How improve displaying errors?
                    console.log(errorResponse);

                });
        }, // single card and all cards

    }

})
