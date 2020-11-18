<template>
  <div class="row items-center text-settings__section">
    <div class="col-6">
      <div>
        <span style="margin-right: 4px">Междустрочный интервал:</span>
        <span>{{ lineSpacing.toFixed(1) }}</span>
      </div>
    </div>
    <div class="col-6 flex justify-end">
      <q-btn @click="reduceLineSpacing" dense flat rounded icon="remove_circle_outline"></q-btn>
      <q-btn @click="increaseLineSpacing" dense flat rounded icon="add_circle_outline"></q-btn>
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
