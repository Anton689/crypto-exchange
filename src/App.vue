<template>
  <div id="app">
    <exchange-widget/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    ExchangeWidget: () => import('@/components/ExchangeWidget')
  }

}
</script>
