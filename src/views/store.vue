<template>
  <div>
    <h1> 这是 Store 组件</h1>
    <a-input v-model="inputValue" class="inputBorder"></a-input>
    <a-input :value1="inputValue" @input="handleInput" class="inputBorder"></a-input>
    <p>{{inputValue}}</p>
    <div class="inputBorder">
      <a-show :content="inputValue" />
    </div>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
export default {
  name: 'stroe',
  data () {
    return {
      inputValue: ''
    }
  },
  components: {
    AInput,
    AShow
  },
  methods: {
    handleInput (e) {
      this.inputValue = e
    }
  }
}
</script>

<style scoped>
.inputBorder {
  border: 1px solid chocolate;
}
</style>
