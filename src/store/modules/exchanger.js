import { exchangeAPI } from '@/api/exchangeAPI'
import {
  SET_CURRENCIES, SET_ERROR,
  SET_ESTIMATE_AMOUNT,
  SET_FROM,
  SET_MIN_AMOUNT, SET_PAIR_ERROR,
  SET_TO, SWAP_CURRENCIES
} from '@/store/mutationTypes'

export default {
  namespaced: true,
  state: {
    currenciesList: [],
    currencyFrom: {
      ticker: 'btc',
      image: 'https://content-api.changenow.io/uploads/btc_d8db07f87d.svg'
    },
    currencyTo: {
      ticker: 'eth',
      image: 'https://content-api.changenow.io/uploads/eth_f4ebb54ec0.svg'
    },
    minimalExchangeAmount: null,
    estimatedExchangeAmount: null,
    isError: false,
    isPairError: false

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
    },
    [SET_ERROR] (state, value) {
      state.isError = value
    },
    [SET_PAIR_ERROR] (state, value) {
      state.isPairError = value
    },
    [SWAP_CURRENCIES] (state) {
      [state.currencyFrom, state.currencyTo] = [state.currencyTo, state.currencyFrom]
    }
  },

  actions: {
    fetchCurrencies ({ commit }) {
      exchangeAPI.getAvailableCurrencies()
        .then(res => {
          commit(SET_CURRENCIES, res.data)
        })
        .catch(e => {
          console.error(e.response.data)
        })
    },
    fetchMinAmount ({ dispatch, state, commit }) {
      exchangeAPI.getMinExchangeAmount(state.currencyFrom.ticker, state.currencyTo.ticker)
        .then(res => {
          commit(SET_MIN_AMOUNT, res.data.minAmount)
          dispatch('fetchEstimateAmount', res.data.minAmount)
        })
        .catch(e => {
          if (e.response.data.error === 'pair_is_inactive') {
            commit(SET_PAIR_ERROR, true)
          } else {
            console.error(e.response.data.error)
          }
        })
    },
    fetchEstimateAmount ({ state, commit }, amount) {
      exchangeAPI.getEstimatedExchangeAmount(amount, state.currencyFrom.ticker, state.currencyTo.ticker)
        .then(res => {
          commit(SET_ESTIMATE_AMOUNT, res.data.estimatedAmount)
          commit(SET_PAIR_ERROR, false)
        })
        .catch(e => {
          if (e.response.data.error === 'pair_is_inactive') {
            commit(SET_PAIR_ERROR, true)
          } else {
            console.error(e.response.data.error)
          }
        })
    }
  }
}
