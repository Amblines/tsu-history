<template>
  <div class="row items-center text-settings__section">
    <div class="col-12">
      <div class="column settings-items-header">
        <span>Шрифт</span>
      </div>
    </div>
    <div class="col-9 flex justify-end">
      <q-select bg-color="white" color="secondary" class="full-width" dense square filled v-model="font" :options="options">
      </q-select>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { EventBus } from 'boot/EventBus'

export default {
  name: 'Font',
  data () {
    return {
      options: [
        'Georgia', 'Times', 'Arial', 'Helvetica', 'Roboto'
      ]
    }
  },
  computed: {
    ...mapGetters([
      'book',
      'settings'
    ]),
    font: {
      get () {
        return this.settings.font
      },
      set (value) {
        this.updateSettings({
          key: 'font',
          value: value
        })
        EventBus.$emit('changeThemeOptions', ['default', { p: { 'font-family': value + ' !important' } }])
      }
    }
  },
  methods: {
    ...mapMutations([
      'updateSettings'
    ])
  }
}
</script>

<style scoped>

</style>
