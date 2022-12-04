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

export default {
  name: 'CurrenciesController',
  props: {
    selectedTickerFrom: {
      type: Object,
      default () {
        return {}
      }
    },
    selectedTickerTo: {
      type: Object,
      default () {
        return {}
      }
    },
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
  computed: {

  },
  methods: {
    ...mapMutations('exchanger', [SET_TO, SET_FROM]),
    ...mapActions({
      getMinAmount: 'exchanger/fetchMinAmount',
      getEstimateAmount: 'exchanger/fetchEstimateAmount'
    }),

    chooseTickerHandle (currencyItem) {
      const { ticker, image } = currencyItem
      if (this.inputDirection === 'from') {
        this.SET_FROM({ ticker, image })
        this.getMinAmount()
        this.getEstimateAmount()
      } else {
        this.SET_TO({ ticker, image })
        this.getMinAmount()
        this.getEstimateAmount()
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

<style lang="scss" scoped>

</style>
