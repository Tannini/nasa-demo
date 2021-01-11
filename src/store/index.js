import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const NASA_KEY = "UwrID0YldD8LGkowVQCLAqN05a26F7JtI5r4p6G7"

export default new Vuex.Store({
  state: {
    apod: {},
    currentUser: null,
    isLoading: false,
    PhotoMars: [],
  },
  mutations: {
    GET_APOD(state, apod) { state.apod = apod },
    OFF_LOADING(state){state.isLoading = false },
    ON_LOADING(state){state.isLoading = true},
    UPDATE_CURRENT_USER(state, user){state.currentUser = user},
    GET_PHOTO_MARS(state){state.PhotoMars = true}
  },
  actions: {
    getApod({ commit }, date = null) {
      let queryDate = date ? date :new Date().toISOString().substr(0,10)
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&date=${queryDate}`)
      .then(resp => {
        commit('GET_APOD', resp.data)
      })
      .catch(() => {
        commit('GET_APOD', {url: "https://apod.nasa.gov/apod/image/2011/M78_LDN1622_BarnardsLoop_SEP27_28_Oct15_final2048.jpg"})
      })
      .finally(() => {
        commit('OFF_LOADING');
      })
    },
    getPhotoMars({commit}, {sol, robot}){
      axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${robot}/photos?
      sol=${sol}$api_key=${NASA_KEY}`)
      .then(res => {
        commit ('GET_PHOTO_MARS', res.data)
      })
    },
    updateCurrentUser( {commit}, user) {
      commit('UPDATE_CURRENT_USER', user)
    }
  },
  modules: {
  }
})
