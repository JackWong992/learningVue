import { getAppName } from "../api/app";

const actions = {
  updateAppName ({ commit }) {
    getAppName().then( (res) => {
      commit('SET_USER_NAME',res.info.username)
    })
  }
  
}

export default actions;
