<template>
  <div>
    <h1> 这是 Store 组件</h1>
    <!-- <a-input v-model="inputValue" class="inputBorder"></a-input> -->
    <a-input :value1="inputValue" @input="handleInput" class="inputBorder" />
    <p>{{inputValue}}</p> -> lastLetter is {{inputValueLastLetter}}
    <div class="inputBorder">
      <a-show :content="inputValue" />
    </div>
    <h2>
      username
    </h2>
    <p>user_name:{{username}}</p>
    <hr>
    <h2>userName</h2>
    <p>super_Admin: {{userName}}</p>
    <hr>
    <h2>getters里面的usernameWidthVersion</h2>
    <p>{{usernameWidthVersion}}</p>
    <hr>
    <h3>修改username</h3>
    <button @click="handleChangeUserName">修改username</button>
    <h3>通过mutation来设置state里的值</h3>
    <p>{{appVersion}}</p>
    <hr>
    <h3>修改module/state</h3>
    <p>{{userName}}</p>
    <button @click="handleClick">修改module/state</button>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue';
import AShow from '_c/AShow.vue';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  name: 'stroe',
  data() {
    return {
      inputValue: '',
      userObject: {
        a: 'hello',
        b: 'world',
      },
    };
  },
  components: {
    AInput,
    AShow,
  },
  computed: {
    username() {
      return this.$store.state.username;
    },
    // ...mapState(['username']),
    //  ...mapGetters(['usernameWidthVersion']),
    ...mapState({
      // username: (state) => {  return state.username; },
      appVersion: (state) => { return state.appVersion },
      userName: state => {
        return state.user.userName;
      },
    }),
    // ...mapGetters(['usernameWidthVersion']),
    ...mapGetters({
      usernameWidthVersion: 'usernameWidthVersion',
    }),
    inputValueLastLetter() {
      return this.inputValue.substr(-1, 1);
    },
    // usernameWidthVersion () {
    //   return this.$store.getters.usernameWidthVersion
    // }
    // userName(){
    //   return this.$store.state.user.userName
    // }
  },
  methods: {
    ...mapMutations({
       SET_USER_NAME: 'SET_USER_NAME',
       SET_MODULE_USER_NAME: 'SET_MODULE_USER_NAME'
    }),
    ...mapActions(['updateAppName']),
    handleInput(e) {
      this.inputValue = e;
    },
    // handleChangeUserName() {
    //   this.$store.commit('SET_USER_NAME', this.userObject);
    // },
    handleChangeUserName () {
      // this.$store.commit({
      //   // type: 'SET_USER_NAME',
      //   username: this.userObject.a
      // })
      // this.SET_USER_NAME({
      //   username: this.userObject.a
      // })
      this.updateAppName({
        
      })
      // this.$store.commit({
      //   type: 'SET_APP_VERSION'
      // })
    },
    handleClick () {
      this.SET_MODULE_USER_NAME ({
        userName: this.userObject.b
      })
    }
  },
};
</script>

<style scoped>
.inputBorder {
  border: 1px solid chocolate;
}
</style>
