<template>
  <div class="row items-center text-settings__section">
    <div class="col-6">
      <div class="column">
        <span style="margin-right: 4px">Размер текста:</span>
        <span>{{ fontSize }}px</span>
      </div>
    </div>
    <div class="col-6 flex justify-end">
      <q-btn @click="reduceFontSize" dense flat rounded icon="remove_circle_outline"></q-btn>
      <q-btn @click="increaseFontSize" dense flat rounded icon="add_circle_outline"></q-btn>
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
