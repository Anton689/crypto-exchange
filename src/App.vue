<template>
  <div id='app'>
    <exchange-widget/>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    ExchangeWidget: () => import('@/components/ExchangeWidget')
  },
  created () {
    this.getCurrencies()
  },
  methods: {
    ...mapActions({ getCurrencies: 'exchanger/fetchCurrencies' })
  }

}
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 223px;
  width: 100%;
  @media(max-width: 970px){
    margin-top: 64px;
  }
  @media(max-width: 470px){
    margin-top: 30px;
  }

}
</style>
