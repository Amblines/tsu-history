<template>
  <div class="row items-center text-settings__section">
    <div class="col-12">
      <span class="text-settings__header">Просмотр</span>
    </div>
    <div class="col-12 row justify-center items-center">
      <div class="col-4">
        <q-btn size="18px" flat icon="font_download"></q-btn>
      </div>
      <div class="col-4">
        <q-btn size="18px" flat icon="view_carousel"></q-btn>
      </div>
      <div class="col-4">
        <q-btn size="18px" flat icon="view_day"></q-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReaderView'
}
</script>

<style scoped>
  .text-settings__header {
    font-size: 17px;
    font-weight: bold;
  }
</style>
