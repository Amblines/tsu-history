<template>
  <q-drawer
    show-if-above
    content-class="drawer"
    :width="71"
  >
    <tabs></tabs>
  </q-drawer>
</template>

<script>
import Tabs from 'components/Drawer/Tabs'
export default {
  name: 'Drawer',
  components: { Tabs }
}
</script>

<style lang="scss">
.drawer {
  background: $main-tsu
}
</style>
