import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { createPinia} from 'pinia'
import '../css/app.css';
import Layout from "@/Components/Layouts/Layout.vue";
import NoAuthLayout from '@/Components/Layouts/NoAuthLayout.vue';


const piniaApp = createPinia()


createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', {eager: true})

        console.log(pages)

        Object.keys(pages).forEach(function(key){

            // todo change layout to default, and if set layout = null on component, overwrite layout

            if(pages[key].default.name === "LoginView.vue"){
                pages[key].default.layout = NoAuthLayout
            } else {
                pages[key].default.layout = Layout

            }
        })

        return pages[`./Pages/${name}.vue`]
    },
    setup({el, App, props, plugin}) {
        createApp({render: () => h(App, props)})
            .use(plugin)
            .use(piniaApp)
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


