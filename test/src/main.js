import { createApp } from 'vue'
import App from './App.vue'

const changeColorMixin = 
{
    data()
    {
        return {
            isRed: true
        }
    },
    methods:{
        changeColor(){
            this.isRed = !this.isRed;
        }
    }
}

const app = createApp(App)
app.mixin(changeColorMixin)
app.mount('#app')