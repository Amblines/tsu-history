<template>
  <div class="row items-center text-settings__section">
    <div class="col-12">
      <div class="flex settings-items-header">
        <span>Выравнивание</span>
      </div>
    </div>
    <div class="col-12">
      <q-btn :disabled="alignment === 'justify'" color="main-tsu-buttons-bg" class="on-left" @click="alignment = 'justify'" dense>
        <q-icon color="main-tsu-buttons-icon" name="format_align_justify"></q-icon>
      </q-btn>
      <q-btn :disabled="alignment === 'left'" color="main-tsu-buttons-bg" class="on-left" @click="alignment = 'left'" dense>
        <q-icon color="main-tsu-buttons-icon" name="format_align_left"></q-icon>
      </q-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { EventBus } from 'boot/EventBus'

export default {
  name: 'Alignment',
  computed: {
    ...mapGetters([
      'book',
      'settings'
    ]),
    alignment: {
      get () {
        return this.settings.alignment
      },
      set (value) {
        this.updateSettings({
          key: 'alignment',
          value: value
        })
        EventBus.$emit('changeThemeOptions', ['default', { p: { 'text-align': value + ' !important' } }])
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
