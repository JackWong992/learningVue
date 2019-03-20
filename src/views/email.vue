<template>
  <div>
    <h2>This is email</h2>
    <button @click="handleClickBtn" style="border:1px solid #bbff99;">点击</button>
  </div>
</template>

<script>
export default {
  name: 'email.vue',
  methods: {
    handleClickBtn () {
      this.$bus.$emit('on-click', 'helloworld')
    }
  }
}
</script>

<style scoped>

</style>
