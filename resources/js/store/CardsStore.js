import { defineStore } from 'pinia'
import axios from "axios";
import { router } from '@inertiajs/vue3'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        groups: {}, // get all groups
        showCards: 1, // for what group show cards
        cards: {}, // get all cards
        getSingleCard: 1, // for what card get details
    }),

    setters: {

    },

    actions: {
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

        async getCards(form){
            let updateUser =  this.setUser
            let updateError =  this.setError
            axios.post('/login', form, {
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                }
            })
                .then(function (response) {

                    updateUser(response.data.user);

                    localStorage.setItem("user", JSON.stringify(response.data.user));


                    router.visit('/')
                })
                .catch(function (errorResponse) {
                    // todo How improve displaying errors?
                    updateError(errorResponse.response.data.error);
                });
        },

        async getSingleCard(){
            let updateUser =  this.setUser

            axios.post('/logout',[], {
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                }
            })
                .then(function (response) {
                    localStorage.removeItem("user");
                    updateUser({})

                    router.visit('/login')
                })

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
