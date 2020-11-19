<template>
  <div class="text-settings">
    <ReaderView></ReaderView>
    <Theme></Theme>
    <FontSize></FontSize>
    <LineSpacing></LineSpacing>
    <Alignment></Alignment>
    <Font></Font>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import FontSize from 'components/Drawer/TextSettings/FontSize'
import LineSpacing from 'components/Drawer/TextSettings/LineSpacing'
import Alignment from 'components/Drawer/TextSettings/Alignment'
import Font from 'components/Drawer/TextSettings/Font'
import ReaderView from 'components/Drawer/TextSettings/ReaderView'
import Theme from 'components/Drawer/TextSettings/Theme'

export default {
  name: 'TextSettings',
  components: { Theme, ReaderView, Font, Alignment, LineSpacing, FontSize },
  computed: {
    ...mapGetters([
      'book'
    ])
  }
}
</script>

<style lang="scss">
  .text-settings {
    font-size: 15px;
    font-weight: 500;
    &__section {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }
</style>
