import Vue from 'vue'
import Vuex from 'vuex'
import axios from "../axios"
import router from "../router"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    snackbar: {},
  },
  getters: {
    token: (state) => {
      return state.token
    },
    snackbar: (state) => {
      return state.snackbar;
    },
  },
  mutations: {
    login: (state, params) => {
      state.token = params;
    },
    snackbar: (state, snackbar) => {
      state.snackbar = snackbar;
    },
  },
  actions: {
    snackbar: ({ commit }, snackbar) => {
      if (!snackbar.show) snackbar.show = true;
      if (!snackbar.color) snackbar.color = "accent";
      if (!snackbar.timeout) snackbar.timeout = 2000;
      commit("snackbar", snackbar);
    },
    login: ({ commit }, params) => {
      axios.post("/login", params).then((res) => {
        console.log(res);
        if (res) {
          commit("login", res.data.token);
          router.push("/checklist");
        }
      }).catch((error) =>{
        console.log('error', error)
      });
    },
    register: ({ commit }, params) => {
      axios.post("/register", params).then((res) => {
        if (res) {
          router.push("/");
        }
      });
    },
  },
})
