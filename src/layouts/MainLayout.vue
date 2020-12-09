<template>
  <q-layout view="hHr lpR fFf" class="bg-primary">
    <ThemeObserver></ThemeObserver>
    <Header
      title="История Тамбовского Государственного университета имени Г. Р. Державина. Второе издание"
      brand-src="header/logo.png"
    ></Header>
    <drawer></drawer>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from 'components/Header'
import Drawer from 'components/Drawer/Drawer'
import ThemeObserver from 'components/Reader/UserInterface/ThemeObserver'

export default {
  name: 'MainLayout',
  components: {
    ThemeObserver,
    Drawer,
    Header
  }
}
</script>
