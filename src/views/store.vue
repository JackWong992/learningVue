<template>
  <div>
    <h1> 这是 Store 组件</h1>
    <!-- <a-input v-model="inputValue" class="inputBorder"></a-input> -->
    <a-input :value1="inputValue" @input="handleInput" class="inputBorder"/>
    <p>{{inputValue}}</p> -> lastLetter is {{inputValueLastLetter}}
    <div class="inputBorder">
      <a-show :content="inputValue" />
    </div>
    <p>user_name:{{username}}</p>
    <p>super_Admin: {{userName}}</p>
    123
    <p>{{usernameWidthVersion}}</p>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import {mapState, mapGetters} from 'vuex'
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
  computed:{
    // username(){
    //   return this.$store.state.username
    // },
    // ...mapState(['username']),
   //  ...mapGetters(['usernameWidthVersion']),
    ...mapState({
      username: (state) => {  return state.username; },
      userName: (state) => { return state.user.userName }
    }),
    // ...mapGetters(['usernameWidthVersion']),
    ...mapGetters({
      usernameWidthVersion: 'usernameWidthVersion'
    }),
    inputValueLastLetter ( ) {
      return this.inputValue.substr(-1, 1)
    },
    // usernameWidthVersion () {
    //   return this.$store.getters.usernameWidthVersion
    // }
    // userName(){
    //   return this.$store.state.user.userName
    // }
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
