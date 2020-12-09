<template>
  <div class="row items-center text-settings__section">
    <div class="col-12">
      <div class="column settings-items-header">
        <span>Яркость</span>
      </div>
    </div>
    <div class="col-12 flex justify-end on-left">
      <q-slider v-model="brightness" color="white" :min="0" :max="100"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { colors } from 'quasar'
import { EventBus } from 'boot/EventBus'

export default {
  name: 'Brightness',
  computed: {
    ...mapGetters([
      'book',
      'settings'
    ]),
    brightness: {
      get () {
        return this.settings.brightness
      },
      set (value) {
        this.updateSettings({
          key: 'brightness',
          value: value
        })
        colors.setBrand('primary', colors.lighten('#000', value), document.getElementById('q-app'))
        EventBus.$emit('changeThemeOptions', ['default', { body: { 'background-color': colors.lighten('#000', value) } }])
        EventBus.$emit('changeThemeOptions', ['default', { body: { color: colors.lighten('#fff', -value) + '!important' } }])
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
