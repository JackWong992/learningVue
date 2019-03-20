<template>
  <div>
    <input type="text" @input="handleInput" :value="value1">
  </div>
</template>

<script>
export default {
  name: 'AInput',
  props: {
    value1: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    handleInput (event) {
      const value = event.target.value
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>

</style>
