/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        // 'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
        // 'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
        // "./resources/js/views/app.blade.php",
        // "./resources/**/*.{vue,js,ts,jsx,tsx}",
        // "./node_modules/flowbite/**/*.js",
    ],
    plugins: [
        // require('flowbite/plugin')
    ],
    theme: {
        extend: {
            colors: {
                primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"}
            }
        },
    }
}
