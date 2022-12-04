<template>
  <div class='wrapper'>

    <div class='search'>
      <div class='search__inner'>
        <input
          placeholder='Search'
          class='innerInput'
          type='text'>
        <div class='innerClose' @click='closeDropdownHandler'/>
      </div>

    </div>

    <div class='dropdown'>
      <div
        v-for='(currency, index) in currenciesList'
        :key='index'
        class='dropdown__dropdownItem'
        @click='clickHandler(currency)'>
        <img
          v-if='currency.image'
          class='dropdownItemLogo'
          :src='currency.image'
          alt=':('>
        <div v-else class='logoCap'/>
        <div class='dropdownItemTicker'>{{ currency.ticker.toUpperCase() }}</div>
        <div class='dropdownItemTitle'>{{currency.name}}</div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import closeOutside from '@/mixin/closeOutside'

export default {
  mixins: [
    closeOutside
  ],
  name: 'DropdownItem',
  computed: {
    ...mapState({
      currenciesList: state => state.exchanger.currenciesList
    })
  },
  methods: {
    clickHandler (currencyItem) {
      this.$emit('chooseTickerHandle', currencyItem)
    },
    closeDropdownHandler () {
      this.$emit('closeDropdownHandle')
    }
  }
}
</script>

<style lang="scss" scoped>

.wrapper {
  position: relative;
  min-width: 440px;
}

.search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #C1D9E6;
  border-radius: 5px 5px 0 0;
  border-bottom: none;
  background: #F6F7F8;
  min-height: 50px;
  &__inner{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    .innerInput{
      width: 100%;
      background: #F6F7F8;
      padding-left: 16px;
      outline: none;
      border: none;
    }
    .innerClose{
      margin-right: 16px;
      margin-left: 5px;
      width: 16px;
      height: 16px;
      background-image: url('@/assets/Close.svg');
    }
  }
}

::placeholder {
  color: #80A2B6;
  font-size: 16px;
  line-height: 23px;
}

.dropdown {
  position: absolute;
  margin-top: 13px;
  width: 100%;
  top: 35px;
  height: 200px;
  background: #F6F7F8;
  border-top: 1px solid #E3EBEF;;
  border-bottom: 1px;
  border-bottom-style: solid;
  border-left: 1px solid #C1D9E6;
  border-right: 1px solid #C1D9E6;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-color: #C1D9E6;
  overflow: auto;
  :hover {
    background-color: #EAF1F7;
    cursor: pointer;
  }
  :last-child {
    border-bottom: 1px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-color: #C1D9E6;
  }
}

.dropdown__dropdownItem {
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  padding-left: 16px;
  border-top: none;
  border-bottom: none;
  :hover {
    background-color: #EAF1F7;
    cursor: pointer;
  }
  .dropdownItemLogo {
    width: 20px;
    height: 20px;
  }
  .dropdownItemTicker {
    margin-left: 12px;
  }
  .dropdownItemTitle {
    margin-left: 16px;
    font-size: 16px;
    line-height: 23px;
    color: #80A2B6;
  }
}

.logoCap {
  width: 20px;
  height: 20px;
}

</style>
