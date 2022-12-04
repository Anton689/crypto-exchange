const getters = {
  currencyTicker: state => state.exchanger.currenciesList.map(({ ticker }) => ticker),
  currencyImage: state => state.exchanger.currenciesList.map(({ image }) => image)
}

export default getters

// TODO fix
