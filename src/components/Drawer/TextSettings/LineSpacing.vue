<template>
  <div class="row items-center text-settings__section">
    <div class="col-12">
      <div class="settings-items-header">
        <span>Междустрочный интервал</span>
      </div>
    </div>
    <div class="col-12">
      <q-btn color="main-tsu-buttons-bg" @click="lineHeight -= 0.1" class="on-left" dense>
        <q-icon color="main-tsu-buttons-icon" name="remove"></q-icon>
      </q-btn>
      <q-btn color="main-tsu-buttons-bg" @click="lineHeight += 0.1" class="on-left" dense>
        <q-icon color="main-tsu-buttons-icon" name="add"></q-icon>
      </q-btn>
      <span style="font-weight: bold">{{ lineHeight.toFixed(1) }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { EventBus } from 'boot/EventBus'

export default {
  name: 'LineSpacing',
  computed: {
    ...mapGetters([
      'book',
      'settings'
    ]),
    lineHeight: {
      get () {
        return this.settings.lineHeight
      },
      set (value) {
        this.updateSettings({
          key: 'lineHeight',
          value: value
        })
        EventBus.$emit('changeThemeOptions', ['default', { p: { 'line-height': value + ' !important' } }])
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
