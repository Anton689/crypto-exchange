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

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 223px;
}
</style>
