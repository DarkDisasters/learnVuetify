import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons:{
        iconfont: 'md',
        theme:{
            primary: '#9652ff',
            success: '#3cd1c2'
        }
    }
});
