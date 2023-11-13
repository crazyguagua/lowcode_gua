import {createApp} from 'vue'
import App from './app.vue'
import {uuid,Material} from '@guagelc/shared';
import {loadScript} from './utils/utils'




// const material = Material.create()


loadScript('/guage-image.1.0.0.umd.js').then(()=>{
    console.log(window.GuageImage);
    const app = createApp(App);

    app.component('guage-image',window.GuageImage.render)
    app.mount('#app');
 })



    

