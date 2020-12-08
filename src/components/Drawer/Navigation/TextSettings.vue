<template>
  <div class="text-settings">
    <q-btn @click="closeSettings()" dense flat class="text-settings__close-btn">
      <q-icon name="close"></q-icon>
    </q-btn>
    <Brightness></Brightness>
    <Theme></Theme>
    <Alignment></Alignment>
    <Font></Font>
    <FontSize></FontSize>
    <LineSpacing></LineSpacing>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import FontSize from 'components/Drawer/TextSettings/FontSize'
import LineSpacing from 'components/Drawer/TextSettings/LineSpacing'
import Font from 'components/Drawer/TextSettings/Font'
import Theme from 'components/Drawer/TextSettings/Theme'
import { EventBus } from 'boot/EventBus'
import Brightness from 'components/Drawer/TextSettings/Brightness'
import Alignment from 'components/Drawer/TextSettings/Alignment'

export default {
  name: 'TextSettings',
  components: { Alignment, Brightness, Theme, Font, LineSpacing, FontSize },
  computed: {
    ...mapGetters([
      'book'
    ])
  },
  methods: {
    closeSettings () {
      EventBus.$emit('clickDrawerButton')
    }
  }
}
</script>

<style lang="scss">
  .text-settings {
    font-size: 16px;
    font-weight: 500;
    &__close-btn {
      font-size: 20px;
      margin-bottom: 50px;
    }
    &__section {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }
</style>
