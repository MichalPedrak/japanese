import { defineStore } from 'pinia'
import axios from "axios";
import { router } from '@inertiajs/vue3'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        error: {
            name: "",
            email: "",
            password: "",
            login: "",
        },

        user: JSON.parse(localStorage.getItem("user"))
    }),

    setters: {

    },

    actions: {
        setError(error) {
            this.error = error
            console.log(this.error);
        },

        setUser(user) {
            this.user = user
        },

        async register(form){
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

        async login(form){
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

                    router.visit('/');

                })
                .catch(function (errorResponse) {
                    // todo How improve displaying errors?

                    updateError({login: errorResponse.response.data.errors } );

                });

        },

        async logout(){
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

    }

})
