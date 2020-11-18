<template>
  <div class="row items-center text-settings__section">
    <div class="col-12">
      <span class="theme-select__header">Тема</span>
    </div>
    <div class="col-12 row items-center">
      <q-btn class="theme-select" size="12px" dense round color="white"></q-btn>
      <q-btn class="theme-select" size="12px" dense round color="black"></q-btn>
      <q-btn class="theme-select" size="12px" dense round color="brown"></q-btn>
      <q-btn class="theme-select" size="12px" dense round color="grey"></q-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Theme'
}
</script>

<style scoped lang="scss">
  .theme-select {
    &:not(:last-child) {
      margin-right: 10px;
    }
    &__header {
      display: inline-block;
      margin-bottom: 7px;
    }
  }
</style>
