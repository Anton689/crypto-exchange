import { instance } from '@/api/instance'

export const exchangeAPI = {
  getAvailableCurrencies (active = true) {
    return instance.get(`currencies?active=${active}`)
  },
  getMinExchangeAmount (cardsPack) {
    return instance.post('cards/pack', { cardsPack })
  },
  getEstimatedExchangeAmount (params) {
    return instance.delete('cards/pack', { params })
  },
  updatePackList (cardsPack) {
    return instance.put('cards/pack', { cardsPack })
  }
}
