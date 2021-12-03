<template>
  <div><el-button type="primary">HelloWorld</el-button></div>
</template>

<script>
import {useStore} from 'vuex'
export default {
  name:"Home",
  setup(){
    let store = useStore()
    const ENV = import.meta.env
    console.log('ENV',ENV);//获取环境变量
    console.log(store)
  }
}
</script>