<template>
  <div class='wrapper'>
    <header class='header'>
      <h1 class='header__mainTitle'>Crypto Exchange</h1>
      <h3 class='header__subTitle'>Exchange fast and easy</h3>
    </header>
    <section class='content'>
      <div class='content__inputs'>
        <currency-input/>
        <img class='inputsSwap' src='../../assets/swap.svg' alt='ss'>
        <dropdown-item/>
      </div>
      <div class='content__footer'>
        <span class='footerTitle'>Your Ethereum address</span>
        <div class='footerAddress'>
          <input-item/>
          <button-item :name='"EXCHANGE"'/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ExchangeWidget',
  components: {
    ButtonItem: () => import('@/components/Button'),
    CurrencyInput: () => import('@/components/CurrencyInput'),
    InputItem: () => import('@/components/Input'),
    DropdownItem: () => import('@/components/DropdownMenu')
  },
  created () {
    this.getCurrencies()
      .then(res => {
        console.log(res)
      })
  },
  methods: {
    ...mapActions({ getCurrencies: 'exchanger/fetchCurrencies' })
  }
}

</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  //border: 1px solid black;
  padding: 0 16px;
}

.header {
  &__mainTitle {
    @include font-style(50px,60px,300);
  }
  &__subTitle {
    @include font-style(20px,20px,400);
    margin-top: 16px;
  }
}

.content {
  display: flex;
  margin-top: 57px;
  flex-direction: column;
  &__inputs {
    display: flex;
    width: 100%;
    .inputsSwap {
      margin: 0 27px;
    }
  }
  &__footer {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    .footerTitle{
      @include font-style(16px,23px,400);
      display: block;
    }
    .footerAddress{
      margin-top: 8px;
      display: flex;
      width: 100%;
    }
  }
}
</style>
