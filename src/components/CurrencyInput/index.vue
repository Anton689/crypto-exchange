<template>
  <div class='block'>
    <input
      v-else
      class='inputCur'
      type='text'
      :value='inputDirection === "from" ? minimalExchangeAmount : estimateExchangeAmount'
      @keypress='numberValidation($event)'
    >
    <div class='border'/>
    <div class='info' @click.stop='onClickHandler'>
        <img
          class='imgCur'
          :src='inputDirection === "from" ? currencyFrom.image : currencyTo.image'
          alt=':('>
        <span class='currName'>{{ inputDirection === "from" ? currencyFrom.ticker : currencyTo.ticker }}</span>
        <img class='arrow' src='../../assets/ArrowDowns.svg'/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'CurrencyInput',
  props: {
    selectedTicker: {
      type: Object,
      default () {
        return {}
      }
    },
    inputDirection: {
      type: String
    }
  },
  data () {
    return {
      amount: null
    }
  },
  computed: {
    ...mapState({
      currencyTo: state => state.exchanger.currencyTo,
      currencyFrom: state => state.exchanger.currencyFrom,
      minimalExchangeAmount: state => state.exchanger.minimalExchangeAmount,
      estimateExchangeAmount: state => state.exchanger.estimatedExchangeAmount
    })
  },
  methods: {
    ...mapActions({
      setAmount: 'exchanger/fetchEstimateAmount'
    }),
    onClickHandler () {
      this.$emit('openDropdownHandle')
    },
    setValue () {
      if (this.inputDirection === 'from' && !this.amount) {
        this.amount = this.minimalExchangeAmount
      }
      if (this.inputDirection !== 'from') {
        this.amount = this.estimateExchangeAmount
      }
      // return this.inputDirection === 'from' ? this.minimalExchangeAmount : this.estimateExchangeAmount
    },
    onChangeHandle (amount) {
      console.log(amount)
      this.setAmount(amount)
    },
    numberValidation (e) {
      const keysAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
      const keyPressed = e.key

      if (!keysAllowed.includes(keyPressed)) {
        e.preventDefault()
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.block {
  display: flex;
  border: 1px solid #E3EBEF;
  border-radius: 5px;
  background: #F6F7F8;
  width: 100%;
  max-width: 440px;
  height: 50px;
}

.inputCur {
  outline: none;
  border: none;
  width: 290px;
  background: #F6F7F8;
  padding-left: 16px;
}
.info {
  display: flex;
  align-items: center;
  width: 159px;
  padding-left: 16px;
  padding-right: 5px;
}

.border {
  border-left: 1px solid #E3EBEF;
  height: 30px;
  margin-top: 10px;
}

.arrow {
  margin-left: 5px;
  width: 16px;
  height: 16px;

}

.content {
  display: flex;
}

.currName {
  min-width: 60px;
  font-size: 16px;
  line-height: 23px;
  margin-left: 12px;
  color: #282828;
}

.imgCur {
  width: 20px;
  height: 20px;
}

</style>
