import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import {store} from '@/store'
import 'element-plus/lib/theme-chalk/index.css';
//按需引入element plus 组件
import { 
  ElButton,
  ElContainer,
  ElAside,
  ElMain,
  ElHeader,
  ElFooter,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElMenuItemGroup
} from 'element-plus'

const app =createApp(App)// 生成 Vue 实例 app

app.use(router)// 引用路由实例
app.use(store)//引入vuex

app.use(ElButton)
app.use(ElContainer)
app.use(ElAside)
app.use(ElMain)
app.use(ElHeader)
app.use(ElFooter)
app.use(ElMenu)
app.use(ElMenuItem)
app.use(ElSubmenu)
app.use(ElMenuItemGroup)


app.mount('#app')//挂载到#app

