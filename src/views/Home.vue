<template>
  <div class="home">
    <b>{{food}}</b>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="leave()">退出当前登录</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    leave () {
      window.localStorage.removeItem('HAS_LOGIN')
      window.location.reload()
    }
  }
}
</script>
