<template>
  <div class="row items-center text-settings__section">
    <div class="col-12">
      <div class="column settings-items-header">
        <span>Размер текста</span>
      </div>
    </div>
    <div class="col-12">
      <q-btn color="main-tsu-buttons-bg" class="on-left" @click="fontSize--" dense>
        <q-icon color="main-tsu-buttons-icon" name="remove"></q-icon>
      </q-btn>
      <q-btn color="main-tsu-buttons-bg" class="on-left" @click="fontSize++" dense>
        <q-icon color="main-tsu-buttons-icon" name="add"></q-icon>
      </q-btn>
      <span style="font-weight: bold">{{ fontSize }}</span>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex'
import { EventBus } from 'boot/EventBus'

export default {
  name: 'FontSize',
  computed: {
    ...mapGetters([
      'book',
      'settings'
    ]),
    fontSize: {
      get () {
        return this.settings.fontSize
      },
      set (value) {
        this.updateSettings({
          key: 'fontSize',
          value: value
        })
        EventBus.$emit('changeThemeOptions', ['fontSize', value + 'px'])
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
