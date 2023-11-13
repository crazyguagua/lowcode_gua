import App from './app.vue'
export default {
    render:App, //组件渲染函数
    editorProps:{
        src:{  //editor属性
            type:'string', 
            defaultValue:''
        }
    }
};