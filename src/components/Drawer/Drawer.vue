<template>
  <q-drawer
    v-model="showDrawer"
    show-if-above
    content-class="drawer"
    :width="71"
  >
    <tabs></tabs>
  </q-drawer>
</template>

<script>
import Tabs from 'components/Drawer/Tabs'
import { EventBus } from 'boot/EventBus'
export default {
  name: 'Drawer',
  components: { Tabs },
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
.drawer {
  background: $main-tsu
}
</style>
