<template>
  <q-drawer
    v-model="showDrawer"
    show-if-above
    side="right"
    overlay
    content-class="drawer"
  >
    <div class="settings-overlay bg-main-tsu">
    </div>
    <div class="settings-content">
      <TextSettings></TextSettings>
    </div>
  </q-drawer>
</template>

<script>
import { EventBus } from 'boot/EventBus'
import TextSettings from 'components/Drawer/TextSettings'
export default {
  name: 'Drawer',
  components: { TextSettings },
  data () {
    return {
      showDrawer: false
    }
  },
  mounted () {
    EventBus.$on('clickDrawerButton', () => {
      this.showDrawer = !this.showDrawer
    })
  }
}
</script>

<style lang="scss">
.q-drawer {
  background: transparent;
}

.settings-overlay {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: .85;
}

.settings-content {
  position: relative;
  z-index: 999;
  color: #fff;
  padding: 35px 35px 31px;
}
</style>
