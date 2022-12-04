<template>
  <div>
    <currency-input
      v-if='!isDropdownOpen'
      :inputDirection='inputDirection'
      @openDropdownHandle='openDropdownHandle'/>

    <dropdown-item
      v-show='isDropdownOpen'
      @chooseTickerHandle='chooseTickerHandle'
      @closeDropdownHandle='closeDropdownHandle'/>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import { SET_FROM, SET_TO } from '@/store/mutationTypes'
import { FROM } from '@/constants/currencyAmount'

export default {
  name: 'CurrenciesController',
  props: {
    inputDirection: {
      type: String
    }
  },
  components: {
    CurrencyInput: () => import('@/components/CurrencyInput'),
    DropdownItem: () => import('@/components/DropdownMenu')
  },
  data () {
    return {
      isDropdownOpen: false
    }
  },

  methods: {
    ...mapMutations('exchanger', [SET_FROM, SET_TO]),
    ...mapActions({
      getMinAmount: 'exchanger/fetchMinAmount',
      getEstimateAmount: 'exchanger/fetchEstimateAmount'
    }),

    chooseTickerHandle (currencyItem) {
      const { ticker, image } = currencyItem
      if (this.inputDirection === FROM) {
        this.SET_FROM({ ticker, image })
        this.getMinAmount()
      } else {
        this.SET_TO({ ticker, image })
        this.getMinAmount()
      }
      this.isDropdownOpen = false
    },
    openDropdownHandle () {
      this.isDropdownOpen = true
    },
    closeDropdownHandle () {
      this.isDropdownOpen = false
    }
  }
}
</script>
