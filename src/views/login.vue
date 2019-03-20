<template>
  <div>
    <h1>This is login</h1>
    <button @click="isLogin()">{{number}} 点击实现登录</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      number: 1
    }
  },
  methods: {
    isLogin () {
      this.number++
      if (this.number === 5) {
        console.log(this.number)
        window.localStorage.setItem('HAS_LOGIN', true)
        window.location.reload()
      }
    }
  }
}
</script>

<style scoped>

</style>
