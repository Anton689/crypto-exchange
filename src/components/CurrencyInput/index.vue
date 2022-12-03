<template>
  <div class='block'>
    <input class='inputCur' type='number'>
    <div class='border'/>
    <div class='info'>
        <img class='imgCur' src='../../assets/btcsvg.svg' alt=':('>
        <span class='currName'>BTC</span>
        <div class='arrow'/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurrencyInput'
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
  padding-left: 36px;
}

.border {
  border-left: 1px solid #E3EBEF;
  height: 30px;
  margin-top: 10px;
}

.arrow {
  margin: 0 8px 0 30px;
  width: 16px;
  height: 16px;
  background-image: url('@/assets/ArrowDowns.svg');

}

.content {
  display: flex;
}

.currName {
  font-size: 16px;
  line-height: 23px;
  margin-left: 12px;
  color: #282828;
}

</style>
