<template>
  <div class='wrapper'>
    <header class='header'>
      <h1 class='header__mainTitle'>Crypto Exchange</h1>
      <h3 class='header__subTitle'>Exchange fast and easy</h3>
    </header>

    <section class='content'>
      <div class='content__inputs'>
        <currencies-controller :inputDirection='inputFrom'/>
        <img
          class='inputsSwap'
          src='../../assets/swap.svg'
          alt=':('
          @click='swapCurrencies'>
        <currencies-controller :inputDirection='inputTo'/>
      </div>

      <div class='content__footer'>
        <span class='footerTitle'>Your Ethereum address</span>
        <div class='footerAddress'>
          <input-item/>
          <button-item :name='"EXCHANGE"'/>
        </div>
        <span v-if='isError && !isPairError' class='error'>Amount less then min</span>
        <span v-if='isPairError' class='error'>This pair is disabled now</span>
      </div>
    </section>

  </div>
</template>

<script>

import { mapActions, mapMutations, mapState } from 'vuex'
import { FROM, TO } from '@/constants/currencyAmount'
import { SWAP_CURRENCIES } from '@/store/mutationTypes'

export default {
  name: 'ExchangeWidget',
  components: {
    ButtonItem: () => import('@/components/Button'),
    InputItem: () => import('@/components/Input'),
    CurrenciesController: () => import('@/components/CurrenciesController')
  },
  data () {
    return {
      inputFrom: FROM,
      inputTo: TO

    }
  },
  computed: {
    ...mapState({
      isError: state => state.exchanger.isError,
      isPairError: state => state.exchanger.isPairError
    })
  },
  created () {
    this.getMinAmount()
  },
  methods: {
    ...mapMutations('exchanger', [SWAP_CURRENCIES]),
    ...mapActions({
      getMinAmount: 'exchanger/fetchMinAmount'
    }),
    swapCurrencies () {
      this.SWAP_CURRENCIES()
      this.getMinAmount()
    }
  }
}

</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 16px;
  @media(max-width: 470px){
    width: 100%;
  }
}

.header {
  &__mainTitle {
    @include font-style(50px,60px,300);
    @media(max-width: 470px){
      font-size: 40px;
    }
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
    @media(max-width: 970px){
      flex-direction: column;
    }
    .inputsSwap {
      margin: 0 27px;
      @media(max-width: 970px){
        width: 24px;
        height: 24px;
        align-self: flex-end;
        transform: rotate(90deg);
        margin: 16px;
      }
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
      @media(max-width: 970px){
        flex-direction: column;
      }
    }
  }
}

.error{
  align-self: flex-end;
  margin-right: 35px;
  color: #E03F3F;
}
</style>
