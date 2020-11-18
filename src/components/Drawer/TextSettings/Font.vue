<template>
  <div class="row items-center text-settings__section">
    <div class="col-4">
      <div class="column">
        <span>Шрифт</span>
      </div>
    </div>
    <div class="col-8 flex justify-end">
      <q-select @input="changeFont" class="full-width" label-color="black" bg-color="white" dense square filled v-model="font" :options="options" label="Выберите шрифт" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Font',
  data () {
    return {
      font: null,
      options: [
        'Georgia', 'Times', 'Arial', 'Helvetica', 'Roboto'
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
