<template>
  <div class="row items-center text-settings__section">
    <div class="col-12">
      <div class="flex">
        <span style="margin-right: 4px">Выравнивание</span>
      </div>
    </div>
    <div class="col-12">
      <q-btn @click="changeAlignment('left')" dense flat icon="format_align_left"></q-btn>
      <q-btn @click="changeAlignment('justify')" dense flat icon="format_align_justify"></q-btn>
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
