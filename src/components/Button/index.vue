<template>
    <button class='button'> {{name}} </button>
</template>

<script>
export default {
  name: 'ButtonItem',
  props: {
    name: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.button {
  @include font-style(16px,19px,500);
  width: 100%;
  max-width: 205px;
  height: 50px;
  margin-left: 32px;
  border: none;
  border-radius: 5px;
  background-color: $main-color;
  color: #FFFF;
  padding: 15px 59px;
   &:hover {
    background-color: #0095E0;
    cursor: pointer;
  }

}

</style>
