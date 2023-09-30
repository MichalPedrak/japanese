import { defineStore } from 'pinia'
import axios from "axios";
import { router } from '@inertiajs/vue3'

// todo split into group and cards stores

export const useCardStore = defineStore('cardStore', {
    state: () => ({
        groups: {},
        showStep: 1, // for what group show cards
        cards: {}, // get all cards
        singleCard: {}, // for what card get details
        singleGroup: {}, // for what card get details
        showModal: false,
        showSingleCard: 1,
    }),

    setters: {

    },

    actions: {

        setCards(cards) {
            this.cards = cards
        },

        getShowModal(){
            return this.showModal;
        },

        setGroups(groups) {
            this.groups = groups
        },

        setSingleCard(singleCard) {
            this.singleCard = singleCard
        },

        setSingleGroup(singleGroup) {
            this.singleGroup = singleGroup
        },

        changeStep(step, resetSingleCard = false) {

            if(resetSingleCard){
                this.singleCard = {};
            }

            this.showStep = step
        },

        changeSingleCard(action, order = null){

            if(action === 'next'){
                this.showSingleCard++;
            }
            if(action === 'prev'){
                this.showSingleCard--;
            }
            console.log('tak :' + order);

            if(order){
                this.showSingleCard = order;
            }


        },

        setError(error) {
            this.error = error
        },

        setUser(user) {
            this.user = user
        },

        setShowModal(showModal, clear = false, data = []) {
            let setSingleCard = this.setSingleCard
            let setSingleGroup = this.setSingleGroup

            if(clear == true){
                setSingleCard({});
                setSingleGroup({});
            }

            if(showModal == 'edit-group'){
                this.setSingleGroup(data);
            }

            this.showModal = showModal
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

                  response.data.forEach(function(item){
                      console.log(item);
                    })

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
            let setShowModal =  this.setShowModal

            axios.get('/admin/cards/single/' + id, {
                headers: {
                    // 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                    'Content-type': 'application/json',

                }
            })
                .then(function (response) {
                    setSingleCard(response.data)
                    setShowModal('edit-card')
                    console.log(response)
                })
                .catch(function (errorResponse) {
                    // todo How improve displaying errors?
                    console.log(errorResponse)
                });
        },

        async moveCard(data){



            axios.put('/admin/cards/single/move/' + data.card_id, data,{
                headers: {
                    // 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                    'Content-type': 'application/json',

                }
            })
                .then(function (response) {

                    console.log(response)

                    // store.cards[data.card_id].position = response.data.position;
                })
                .catch(function (errorResponse) {
                    // todo How improve displaying errors?
                    console.log(errorResponse)
                });


        },

        async addGroup(form){

            let setShowModal =  this.setShowModal
            let getGroups =  this.getGroups

            axios.post('/admin/groups/store', form)
                .then(function (response) {

                    getGroups()
                    setShowModal('')
                    console.log(response)

                })
                .catch(function (errorResponse) {
                    // todo How improve displaying errors?
                   console.log(errorResponse)

                });
        },

        async editGroup(form){

            let setShowModal =  this.setShowModal
            let getGroups =  this.getGroups

            axios.post('/admin/groups/update/' + form.id, form)
                .then(function (response) {

                    getGroups()
                    setShowModal('')
                    console.log(response)

                })
                .catch(function (errorResponse) {
                    // todo How improve displaying errors?
                    console.log(errorResponse)

                });
        },

        async addCard(form){

            let setShowModal =  this.setShowModal
            let getCards =  this.getCards

            axios.post('/admin/cards/store', form)
                .then(function (response) {

                    getCards(form.group_id)
                    setShowModal('')
                    console.log(response)

                })
                .catch(function (errorResponse) {
                    // todo How improve displaying errors?
                    console.log(errorResponse)

                });
        },

        async editCard(form){

            let setShowModal =  this.setShowModal
            let getCards =  this.getCards

            axios.post('/admin/cards/update/' + form.id, form)
                .then(function (response) {

                    getCards(form.group_id)
                    setShowModal('')
                    console.log(response)

                })
                .catch(function (errorResponse) {
                    // todo How improve displaying errors?
                    console.log(errorResponse)

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
