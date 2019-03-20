<template>
  <div>
    <h2>This is Tel</h2>
    <h3>{{message}}</h3>
  </div>
</template>

<script>
export default {
  name: 'tel',
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    this.$bus.$on('on-click', (mes) => {
      this.message = mes
    })
  }
}
</script>

<style scoped>

</style>
