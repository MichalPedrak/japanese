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
    theme: {}
}
