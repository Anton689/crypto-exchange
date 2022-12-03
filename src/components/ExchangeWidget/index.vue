<template>
  <div class="wrapper">
    <header class="header">
      <h1 class="header__mainTitle">Crypto Exchange</h1>
      <h3 class="header__subTitle">Exchange fast and easy</h3>
    </header>
    <section class="content">
      <div class="content__inputs">
        <input class="inputOne" type="text">
        <input class="inputTwo" type="text">
      </div>
      <div class="content__footer">
        <span class="footerTitle">Your Ethereum address</span>
        <div class="footerAddress">
          <input class="inputThree" type="text">
          <button-item :name="'EXCHANGE'"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ExchangeWidget',
  components: {
    ButtonItem: () => import('@/components/Button')
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  width: 100%;
  padding: 0 220px 0 220px;
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
    .inputOne {
      margin-right: 60px;
      max-width: 450px;
      width: 100%;
      height: 50px;
    }
    .inputTwo {
      max-width: 450px;
      width: 100%;
      height: 50px;
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
      display: flex;
      width: 100%;
    }
  }
}

.inputThree {
    width: 100%;
    max-width: 725px;
    height: 50px;
  }
</style>
