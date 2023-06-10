import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { createPinia} from 'pinia'
import '../css/app.css';
import Layout from "@/Admin/Components/Layouts/Layout.vue";
import NoAuthLayout from '@/Admin/Components/Layouts/NoAuthLayout.vue';
import AuthLayout from "@/AuthUser/Components/Layouts/AuthLayout.vue";
import 'v-calendar/style.css';
import VCalendar from 'v-calendar';
const piniaApp = createPinia()


createInertiaApp({
    resolve: name => {
        let pages1 = import.meta.glob('./*/Pages/*.vue', {eager: true})
        let pages2 = import.meta.glob('./Pages/*.vue', {eager: true})

        let pages = {...pages1, ...pages2}

        Object.keys(pages).forEach(function(key){

            // todo change layout to default, and if set layout = null on component, overwrite layout

            if(pages[key].default.name === "LoginView.vue"){
                pages[key].default.layout = NoAuthLayout
            } else {
                pages[key].default.layout = Layout
            }

            if(key.includes('AuthUser')){
                pages[key].default.layout = AuthLayout
            }
        })

            console.log(pages)
        if( pages.hasOwnProperty(`./Admin/Pages/${name}.vue`)){
            return pages[`./Admin/Pages/${name}.vue`]
        } else if( pages.hasOwnProperty(`./AuthUser/Pages/${name}.vue`)){
            return pages[`./AuthUser/Pages/${name}.vue`]
        }

        return pages[`./Pages/${name}.vue`]
    },
    setup({el, App, props, plugin}) {
        createApp({render: () => h(App, props)})
            .use(plugin)
            .use(piniaApp)
            .use(VCalendar)
            .mount(el)
    },
    progress: {
        // The delay after which the progress bar will appear
        // during navigation, in milliseconds.
        delay: 250,
            // The color of the progress bar.
        color: '#29d',

        // Whether to include the default NProgress styles.
        includeCSS: true,

        // Whether the NProgress spinner will be shown.
        showSpinner: false,
    },
});


