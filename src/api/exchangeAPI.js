import { instance } from '@/api/instance'

const apiKey = 'c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd'

export const exchangeAPI = {
  getAvailableCurrencies (active = true) {
    return instance.get(`currencies?active=${active}`)
  },
  getMinExchangeAmount (from, to) {
    return instance.get(`min-amount/${from}_${to}?api_key=${apiKey}`)
  },
  getEstimatedExchangeAmount (amount, from, to) {
    return instance.get(`exchange-amount/${amount}/${from}_${to}/?api_key=${apiKey}`)
  }
}
