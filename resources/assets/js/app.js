
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

//require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('Home', require('./components/Home.vue'));
Vue.component('Cooking', require('./components/Cooking.vue'));
Vue.component('Videogames', require('./components/Videogames.vue'));
Vue.component('Programming', require('./components/Programming.vue'));
Vue.component('laravel', require('./components/Laravel.vue'));
Vue.component('es6', require('./components/ES6.vue'));

const app = new Vue({
    el: '#app'
    //I would implement routing and attach the corresponding components
});
