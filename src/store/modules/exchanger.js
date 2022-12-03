import { exchangeAPI } from '@/api/exchangeAPI'

export default {
  namespaced: true,
  state: {
    currenciesList: []
  },

  mutations: {
    SET_CURRENCIES (state, payload) {
      console.log(payload)
      state.currenciesList = payload
    }
  },

  actions: {
    fetchCurrencies ({ commit }) {
      exchangeAPI.getAvailableCurrencies()
        .then(res => {
          commit('SET_CURRENCIES', res.data)
        })
        .catch(e => {
          console.error(e)
        })
    }
  }
}
