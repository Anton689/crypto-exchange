<template>
  <div class='wrapper1'>

    <div class='block'>
      <div class='inputBlock'>
        <input placeholder='Search' class='input' type='text'>
        <div class='cancel'/>
      </div>

    </div>

    <div class='dropdown'>
      <div class='dropdownItem'>
        <img class='logo' src='../../assets/btcsvg.svg'>
        <div class='cutName'>BTC</div>
        <div class='title'>Bitcoin</div>
      </div>
      <div class='dropdownItem'>
        <img class='logo' src='../../assets/btcsvg.svg'>
        <div class='cutName'>BTC</div>
        <div class='title'>Bitcoin</div>
      </div>
      <div class='dropdownItem'>
        <img class='logo' src='../../assets/btcsvg.svg'>
        <div class='cutName'>BTC</div>
        <div class='title'>Bitcoin</div>
      </div>
      <div class='dropdownItem'>
        <img class='logo' src='../../assets/btcsvg.svg'>
        <div class='cutName'>BTC</div>
        <div class='title'>Bitcoin</div>
      </div>
      <div class='dropdownItem'>
        <img class='logo' src='../../assets/btcsvg.svg'>
        <div class='cutName'>BTC</div>
        <div class='title'>Bitcoin</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'DropdownItem'
}
</script>

<style lang="scss" scoped>

.wrapper1 {
  position: relative;
  min-width: 440px;
}

.block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #C1D9E6;
  border-radius: 5px 5px 0 0;
  border-bottom: none;
  background: #F6F7F8;
  min-height: 50px;
}

.inputBlock{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
}
.input{
  width: 100%;
  background: #F6F7F8;
  padding-left: 16px;
  outline: none;
  border: none;
}

::placeholder {
  color: #80A2B6;
  font-size: 16px;
  line-height: 23px;
}

.cancel{
  margin-right: 16px;
  margin-left: 5px;
  width: 16px;
  height: 16px;
  background-image: url('@/assets/Close.svg');
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

.dropdownItem {
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
}

.logo {
  width: 20px;
  height: 20px;
}

.cutName {
  margin-left: 12px;
}

.title {
  margin-left: 16px;
  font-size: 16px;
  line-height: 23px;
  color: #80A2B6;
}

</style>
