<template>
  <div class='wrapper'>
    <input
      v-model='amount'
      class='amount'
      type='text'
      @keypress='numberValidation($event)'
    >
    <div class='divider'/>
    <div class='options' @click.stop='onClickHandler'>
        <img
          v-if='setCurLogo'
          class='options__logo'
          :src='setCurLogo'
          alt=':('>
        <div v-else class='logoCap'/>
        <span class='options__ticker'>{{ setCurName }}</span>
        <img class='options__close' src='../../assets/ArrowDowns.svg'/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import { FROM } from '@/constants/currencyAmount'
import { SET_ERROR, SET_ESTIMATE_AMOUNT } from '@/store/mutationTypes'

export default {
  name: 'CurrencyInput',
  props: {
    inputDirection: {
      type: String
    }
  },

  computed: {
    ...mapState({
      currencyTo: state => state.exchanger.currencyTo,
      currencyFrom: state => state.exchanger.currencyFrom,
      minimalExchangeAmount: state => state.exchanger.minimalExchangeAmount,
      estimateExchangeAmount: state => state.exchanger.estimatedExchangeAmount
    }),

    amount: {
      get () {
        return this.inputDirection === FROM ? this.minimalExchangeAmount : this.estimateExchangeAmount
      },
      set (newValue) {
        if (+newValue < this.minimalExchangeAmount) {
          this.SET_ESTIMATE_AMOUNT('-')
          this.SET_ERROR(true)
        } else if (+newValue && this.inputDirection === FROM) {
          this.SET_ERROR(false)
          this.setAmount(newValue)
        }
      }
    },

    setCurLogo () {
      return this.inputDirection === FROM ? this.currencyFrom.image : this.currencyTo.image
    },

    setCurName () {
      return this.inputDirection === FROM
        ? this.currencyFrom.ticker.toUpperCase()
        : this.currencyTo.ticker.toUpperCase()
    }
  },

  methods: {
    ...mapActions({
      setAmount: 'exchanger/fetchEstimateAmount'
    }),
    ...mapMutations('exchanger', [SET_ESTIMATE_AMOUNT, SET_ERROR]),

    onClickHandler () {
      this.$emit('openDropdownHandle')
    },

    numberValidation (e) {
      const keysAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '-']
      const keyPressed = e.key

      if (!keysAllowed.includes(keyPressed)) {
        e.preventDefault()
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.wrapper {
  display: flex;
  border: 1px solid #E3EBEF;
  border-radius: 5px;
  background: #F6F7F8;
  width: 100%;
  max-width: 440px;
  height: 50px;
}

.amount {
  outline: none;
  border: none;
  width: 290px;
  background: #F6F7F8;
  padding-left: 16px;
}

.divider {
  border-left: 1px solid #E3EBEF;
  height: 30px;
  margin-top: 10px;
}

.options {
  display: flex;
  align-items: center;
  width: 159px;
  padding-left: 16px;
  padding-right: 5px;
  &__logo {
    width: 20px;
    height: 20px;
  }
  &__ticker {
    overflow: clip;
    min-width: 60px;
    font-size: 16px;
    line-height: 23px;
    margin-left: 8px;
    color: #282828;
  }
  &__close {
    margin-left: 5px;
    width: 16px;
    height: 16px;

  }
}

.logoCap {
  width: 20px;
  height: 20px;
}

</style>
