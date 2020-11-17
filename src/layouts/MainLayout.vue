<template>
  <q-layout view="hHh lpR fFf">
    <Header
      title="Книга истории ТГУ"
      brand-src="header/logo.png"
    ></Header>
    <Drawer>
    </Drawer>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from 'components/Header'
import Drawer from 'components/Drawer/Drawer'

export default {
  name: 'MainLayout',
  components: {
    Drawer,
    Header
  }
}
</script>
