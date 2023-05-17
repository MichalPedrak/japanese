<template>
    <form @submit.prevent="submit" class="space-y-4 md:space-y-6" action="#">
        <InputForm :modelValue="form.name" @update:modelValue="newValue => form.name = newValue" name="name" id="name" input="text" placeholder="Jan Kowalski">Imię i Nazwisko</InputForm>
        <InputForm :modelValue="form.email" @update:modelValue="newValue => form.email = newValue"  name="email" id="email" input="email" placeholder="kowalski@email.com">Adres E-mail</InputForm>

        <InputForm  :modelValue="form.password" @update:modelValue="newValue => form.password = newValue" name="password" id="password" input="password" placeholder="••••••••">Hasło</InputForm>
        <FormButton>Zarejestruj się</FormButton>
        <ChangeForm @toggleForm="$emit('toggleForm', false)">
            <template #heading>
                Posiadasz już konto?
            </template>
            <template #button>
                Zaloguj się!
            </template>
        </ChangeForm>
        <div>{{ error }}</div>
    </form>
</template>

<script>
import FormButton from "@/Components/Forms/FormsElements/FormButton.vue";
import ChangeForm from "@/Components/Forms/FormsElements/ChangeForm.vue";
import InputForm from "@/Components/Forms/FormsElements/InputForm.vue";
import {reactive, ref, watch} from "vue";
import axios from 'axios';
import {router} from "@inertiajs/vue3";

export default {
    name: "RegisterForm",
    components: {InputForm, ChangeForm, FormButton},
    // props: { errors: Object },
    setup(){
        let error = ref("");

        let form = reactive({
            name: "",
            email: "",
            password: "",
        })



        let submit = () => {

            axios.post('/register', form)
                .then(function (response) {

                    console.log(response.data.message)
                    error.value = response.data.message
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        return {
            error,
            form,
            submit,
        }
    }
}
</script>

<style scoped>

</style>
