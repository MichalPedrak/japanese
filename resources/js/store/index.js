import { defineStore } from 'pinia'
import axios from "axios";
import {reactive} from "vue";

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        error: {
            name: "",
            email: "",
            password: "",
        }
    }),

    setters: {

    },

    actions: {
        setError(error) {
            this.error = error
        },

        async register(form){
            let updateError =  this.setError
            axios.post('/register', form)
                .then(function (response) {
                    console.log(response)
                })
                .catch(function (errorResponse) {
                    // todo How improve displaying errors?
                    updateError(errorResponse.response.data.errors);

                });
        },

    }

})
