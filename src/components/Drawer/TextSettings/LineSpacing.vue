<template>
  <div class="row items-center text-settings__section">
    <div class="col-12">
      <div class="settings-items-header">
        <span>Междустрочный интервал</span>
      </div>
    </div>
    <div class="col-12">
      <q-btn color="main-tsu-buttons-bg" @click="reduceLineSpacing" class="on-left" dense>
        <q-icon color="main-tsu-buttons-icon" name="remove"></q-icon>
      </q-btn>
      <q-btn color="main-tsu-buttons-bg" @click="increaseLineSpacing" class="on-left" dense>
        <q-icon color="main-tsu-buttons-icon" name="add"></q-icon>
      </q-btn>
      <span style="font-weight: bold">{{ lineSpacing.toFixed(1) }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LineSpacing',
  data () {
    return {
      lineSpacing: 1.5
    }
  },
  computed: {
    ...mapGetters([
      'book'
    ])
  },
  methods: {
    increaseLineSpacing () {
      this.lineSpacing += 0.1
      this.book.entity.rendition.themes.default({ p: { 'line-height': this.lineSpacing + ' !important' } })
    },
    reduceLineSpacing () {
      this.lineSpacing -= 0.1
      this.book.entity.rendition.themes.default({ p: { 'line-height': this.lineSpacing + ' !important' } })
    }
  }
}
</script>

<style scoped>

</style>
