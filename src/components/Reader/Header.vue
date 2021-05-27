<template>
  <q-header elevated class="bg-main-tsu">
    <OverlayMenu></OverlayMenu>
    <q-bar class="q-electron-drag">
      <q-space></q-space>
      <q-btn dense flat icon="minimize" @click="minimize" />
      <q-btn dense flat icon="crop_square" @click="maximize" />
      <q-btn dense flat icon="close" @click="close" />
    </q-bar>
    <q-toolbar
      class="header"
    >
      <q-img :src="brandSrc" class="header__logo"></q-img>

      <h1 class="header__title text-dark gt-sm">
        {{ title }}
      </h1>

      <q-space></q-space>

      <q-btn-group flat class="header-icons no-wrap flex">
        <q-btn @click="clickReloadButton" class="header-icons__item" dense flat>
          <q-icon class="header-icons__icon" name="update"></q-icon>
        </q-btn>
        <q-btn @click="clickMenuButton" class="header-icons__item" dense flat>
          <q-icon class="header-icons__icon" name="apps"></q-icon>
        </q-btn>
        <q-btn @click="clickDrawerButton" class="header-icons__item" dense flat>
          <q-icon class="header-icons__icon" name="settings"></q-icon>
        </q-btn>
      </q-btn-group>
    </q-toolbar>
  </q-header>
</template>

<script>
import { EventBus } from 'boot/EventBus'
import OverlayMenu from 'components/Navigation/OverlayMenu'

export default {
  name: 'Header',
  components: { OverlayMenu },
  props: {
    title: {
      type: String,
      required: true
    },
    brandSrc: {
      type: String,
      required: true
    }
  },
  methods: {
    clickDrawerButton () {
      EventBus.$emit('clickDrawerButton')
    },
    clickMenuButton () {
      EventBus.$emit('clickShowOverlayMenuButton')
    },
    clickReloadButton () {
      location.reload()
    },
    minimize () {
      if (process.env.MODE === 'electron') {
        this.$q.electron.remote.BrowserWindow.getFocusedWindow().minimize()
      }
    },
    maximize () {
      if (process.env.MODE === 'electron') {
        const win = this.$q.electron.remote.BrowserWindow.getFocusedWindow()

        if (win.isMaximized()) {
          win.unmaximize()
        } else {
          win.maximize()
        }
      }
    },
    close () {
      if (process.env.MODE === 'electron') {
        this.$q.electron.remote.BrowserWindow.getFocusedWindow().close()
      }
    }
  }
}
</script>

<style lang="scss">
.header {
  min-height: 89px;
  &__title {
    margin-top: 18px;
    font-family: "Helvetica", sans-serif;
    font-size: 16px;
    max-width: 440px;
    line-height: 25px;
  }
  &-icons {
    &__item {
      font-size: 23px;
      &:not(:last-child) {
        margin-right: 10px;
        @media screen and (max-width: $breakpoint-xs){
          margin-right: 0;
        }
      }
    }
  }
  &__logo {
    margin-top: 1px;
    margin-right: 35px;
    width: 138px;
    height: 50px;
  }
}
</style>
