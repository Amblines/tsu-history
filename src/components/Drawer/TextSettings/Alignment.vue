<template>
  <div class="row items-center text-settings__section">
    <div class="col-12">
      <div class="flex settings-items-header">
        <span>Выравнивание</span>
      </div>
    </div>
    <div class="col-12">
      <q-btn color="main-tsu-buttons-bg" class="on-left" @click="changeAlignment('justify')" dense>
        <q-icon color="main-tsu-buttons-icon" name="format_align_justify"></q-icon>
      </q-btn>
      <q-btn color="main-tsu-buttons-bg" class="on-left" @click="changeAlignment('left')" dense>
        <q-icon color="main-tsu-buttons-icon" name="format_align_left"></q-icon>
      </q-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Alignment',
  computed: {
    ...mapGetters([
      'book'
    ])
  },
  methods: {
    changeAlignment (value) {
      this.book.entity.rendition.themes.default({ p: { 'text-align': value + ' !important' } })
    }
  }
}
</script>

<style scoped>

</style>
