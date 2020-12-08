<template>
  <div class="row items-center text-settings__section">
    <div class="col-12">
      <div class="column settings-items-header">
        <span>Размер текста</span>
      </div>
    </div>
    <div class="col-12">
      <q-btn color="main-tsu-buttons-bg" class="on-left" @click="reduceFontSize" dense>
        <q-icon color="main-tsu-buttons-icon" name="remove"></q-icon>
      </q-btn>
      <q-btn color="main-tsu-buttons-bg" class="on-left" @click="increaseFontSize" dense>
        <q-icon color="main-tsu-buttons-icon" name="add"></q-icon>
      </q-btn>
      <span style="font-weight: bold">{{ fontSize }}</span>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'FontSize',
  data () {
    return {
      fontSize: 14
    }
  },
  computed: {
    ...mapGetters([
      'book'
    ])
  },
  methods: {
    increaseFontSize () {
      this.fontSize++
      this.book.entity.rendition.themes.fontSize(this.fontSize + 'px')
    },
    reduceFontSize () {
      this.fontSize--
      this.book.entity.rendition.themes.fontSize(this.fontSize + 'px')
    }
  }
}
</script>

<style scoped>

</style>
