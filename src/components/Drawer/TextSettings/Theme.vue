<template>
  <div class="row items-center text-settings__section">
    <div class="col-12">
      <span class="block settings-items-header">Тема</span>
    </div>
    <div class="col-12 row items-center">
      <q-btn @click="loadTheme('default')" class="theme-select" size="8px" dense round color="theme-default"></q-btn>
      <q-btn @click="loadTheme('darken')" class="theme-select" size="8px" dense round color="theme-darken"></q-btn>
    </div>
  </div>
</template>

<script>
import { EventBus } from 'boot/EventBus'

export default {
  name: 'Theme',
  methods: {
    loadTheme (theme) {
      EventBus.$emit('loadTheme', theme)
      EventBus.$emit('clickDrawerButton')
    }
  }
}
</script>

<style scoped lang="scss">
  .theme-select {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
</style>
