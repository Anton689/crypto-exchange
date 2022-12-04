import { exchangeAPI } from '@/api/exchangeAPI'
import { SET_CURRENCIES, SET_ESTIMATE_AMOUNT, SET_FROM, SET_MIN_AMOUNT, SET_TO } from '@/store/mutationTypes'

export default {
  namespaced: true,
  state: {
    currenciesList: [],
    currencyFrom: {
      ticker: 'btc',
      image: 'https://content-api.changenow.io/uploads/btc_d8db07f87d.svg'
    },
    currencyTo: {
      ticker: 'btc',
      image: 'https://content-api.changenow.io/uploads/btc_d8db07f87d.svg'
    },
    minimalExchangeAmount: null,
    estimatedExchangeAmount: null

  },

  mutations: {
    [SET_CURRENCIES] (state, payload) {
      state.currenciesList = payload
    },
    [SET_FROM] (state, payload) {
      state.currencyFrom = payload
    },
    [SET_TO] (state, payload) {
      state.currencyTo = payload
    },
    [SET_MIN_AMOUNT] (state, payload) {
      state.minimalExchangeAmount = payload
    },
    [SET_ESTIMATE_AMOUNT] (state, payload) {
      state.estimatedExchangeAmount = payload
    }
  },

  actions: {
    fetchCurrencies ({ commit }) {
      exchangeAPI.getAvailableCurrencies()
        .then(res => {
          commit(SET_CURRENCIES, res.data)
        })
        .catch(e => {
          console.error(e)
        })
    },
    fetchMinAmount ({ state, commit }) {
      exchangeAPI.getMinExchangeAmount(state.currencyFrom.ticker, state.currencyTo.ticker)
        .then(res => {
          commit(SET_MIN_AMOUNT, res.data.minAmount)
        })
    },
    fetchEstimateAmount ({ state, commit }, amount = 1) {
      exchangeAPI.getEstimatedExchangeAmount(amount, state.currencyFrom.ticker, state.currencyTo.ticker)
        .then(res => {
          commit(SET_ESTIMATE_AMOUNT, res.data.estimatedAmount)
        })
    }
  }
}
