import Vue from 'vue'
const mutations = {
  SET_USER_NAME (state, params) {
    this.state.username = params
  },
  // SET_APP_VERSION (state) {
  //   Vue.set(state, 'appVersion', 'v8.8')
  // }
}

export default mutations;
