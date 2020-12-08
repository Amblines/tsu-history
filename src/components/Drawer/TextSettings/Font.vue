<template>
  <div class="row items-center text-settings__section">
    <div class="col-12">
      <div class="column settings-items-header">
        <span>Шрифт</span>
      </div>
    </div>
    <div class="col-9 flex justify-end">
      <q-select @input="changeFont" bg-color="white" color="secondary" class="full-width" dense square filled v-model="font" :options="options">
      </q-select>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Font',
  data () {
    return {
      font: 'Times',
      options: [
        'Georgia', 'Times', 'Arial', 'Helvetica', 'Roboto', 'PingFang'
      ]
    }
  },
  computed: {
    ...mapGetters([
      'book'
    ])
  },
  methods: {
    changeFont () {
      this.book.entity.rendition.themes.default({ p: { 'font-family': this.font + ' !important' } })
    }
  }
}
</script>

<style scoped>

</style>
