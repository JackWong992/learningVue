const state = {
  userName: 'superAdmin'
}

const  mutations = {
  SET_MODULE_USER_NAME (state, params) {
    state.userName = params.userName
  }
}

const actions = {

}

export default {
  state,
  mutations,
  actions
}
