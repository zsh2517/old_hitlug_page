import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';

console.log(" _____________________         _________________________\n" +
    "< Welcome to HIT LUG! >       < Do you want to join us? >\n" +
    " ---------------------         -------------------------\n" +
    "             /                        \\   \n" +
    "            /                          \\  \n" +
    "        .--.                            \\ \n" +
    "       | o_o|                            \\\n" +
    "       | /_:|                             ^__^\n" +
    "      / /   \\\\                            (oo)\\_______\n" +
    "     ( |     |)                           (__)\\       )\\/\\\n" +
    "    /'\\_   _/`\\                               ||----w |\n" +
    "    \\___)=(___/                               ||     ||");
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
