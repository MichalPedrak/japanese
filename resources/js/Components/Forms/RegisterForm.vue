<template>
    <form @submit.prevent="submit" class="space-y-4 md:space-y-6" action="#">
        <InputForm :error="store.error.name" :modelValue="form.name" @update:modelValue="newValue => form.name = newValue" name="name" id="name" input="text" placeholder="Użytkownik123">Nazwa użytkownika</InputForm>
        <InputForm :error="store.error.email" :modelValue="form.email" @update:modelValue="newValue => form.email = newValue"  name="email" id="email" input="email" placeholder="kowalski@email.com">Adres E-mail</InputForm>
        <InputForm :error="store.error.password" :modelValue="form.password" @update:modelValue="newValue => form.password = newValue" name="password" id="password" input="password" placeholder="••••••••">Hasło</InputForm>

        <FormButton>Zarejestruj się</FormButton>
        <ChangeForm @toggleForm="$emit('toggleForm', false)">
            <template #heading>
                Posiadasz już konto?
            </template>
            <template #button>
                Zaloguj się!
            </template>
        </ChangeForm>
    </form>
</template>

<script>
import FormButton from "@/Components/Forms/FormsElements/FormButton.vue";
import ChangeForm from "@/Components/Forms/FormsElements/ChangeForm.vue";
import InputForm from "@/Components/Forms/FormsElements/InputForm.vue";
import {reactive} from "vue";

import {useAuthStore} from "@/store";


export default {
    name: "RegisterForm",
    components: {InputForm, ChangeForm, FormButton},

    setup(){
        const store = useAuthStore();

        let form = reactive({
            name: "",
            email: "",
            password: "",
        })


        let submit = async () => {
            document.querySelector('.submit .loader').classList.add('show-loader');
            document.querySelector('.submit .button-content').classList.add('hide-content');

            await store.register(form);

            setTimeout(() => {
                document.querySelector('.submit .loader').classList.remove('show-loader');
                document.querySelector('.submit .button-content').classList.remove('hide-content');

            }, 500)
        }


        return {
            store,
            form,
            submit,
        }
    }
}
</script>

<style scoped>

</style>
