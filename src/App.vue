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

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 223px;
  width: 100%;
}
</style>
