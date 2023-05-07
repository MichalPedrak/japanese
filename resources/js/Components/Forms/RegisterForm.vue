<template>
    <form class="space-y-4 md:space-y-6" action="#">
        <InputForm v-model="name" name="name" id="name" input="text" placeholder="Jan Kowalski">Imię i Nazwisko</InputForm>
        <InputForm v-model="username" name="username" id="username" input="text" placeholder="Janek123">Nazwa użytkownika</InputForm>
        <InputForm v-model="email" name="email" id="email" input="email" placeholder="kowalski@email.com">Adres E-mail</InputForm>
        <InputForm v-model="password" name="password" id="password" input="password" placeholder="••••••••">Hasło</InputForm>
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
import {ref} from "vue";

export default {
    name: "RegisterForm",
    components: {InputForm, ChangeForm, FormButton},
    setup(){
        let email = ref('');
        let name = ref('');
        let username = ref('');
        let password = ref('');
        return {
            name,
            username,
            email,
            password,
        }
    }
}
</script>

<style scoped>

</style>
