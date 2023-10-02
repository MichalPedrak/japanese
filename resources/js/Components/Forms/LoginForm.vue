<template>
    <form @submit.prevent="submit" class="space-y-4 md:space-y-6" action="#">
        <InputForm v-model="form.email" name="email" id="email" input="email" placeholder="kowalski@email.com">Email</InputForm>
        <InputForm v-model="form.password" name="password" id="password" input="password" placeholder="••••••••">Hasło</InputForm>


<!--        <div class="flex items-center justify-between">-->
<!--            <div class="flex items-start">-->
<!--                <div class="flex items-center h-5">-->
<!--                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-200 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" >-->
<!--                </div>-->
<!--                <div class="ml-3 text-sm">-->
<!--                    <label for="remember" class="text-gray-500 dark:text-gray-300">Zapamiętaj mnie</label>-->
<!--                </div>-->
<!--            </div>-->
<!--            <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Nie pamiętasz hasła?</a>-->
<!--        </div>-->

        <FormButton>Zaloguj się</FormButton>
        <ChangeForm @toggleForm="$emit('toggleForm', true)">
            <template #heading>
                Nie posiadasz jeszcze konta?
            </template>
            <template #button>
                Zarejestruj się!
            </template>
        </ChangeForm>
    </form>
</template>

<script>
import FormButton from "@/Components/Forms/FormsElements/FormButton.vue";
import ChangeForm from "@/Components/Forms/FormsElements/ChangeForm.vue";
import InputForm from "@/Components/Forms/FormsElements/InputForm.vue";
import {reactive, ref} from "vue";
import {useAuthStore} from "@/store";
import {router} from "@inertiajs/vue3";

export default {
    name: "LoginForm",
    components: {InputForm, ChangeForm, FormButton},
    setup(){
        const store = useAuthStore();

        let form = reactive({
            name: "",
            email: "",
            password: "",
        })


        let submit = async () => {
            await store.login(form);


        }


        return {
            submit,
            form,

        }
    }
}
</script>

<style scoped>

</style>
