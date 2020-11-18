<template>
  <q-header elevated>
    <q-toolbar
      class="header"
    >
      <q-btn class="lt-md" flat @click="clickDrawerButton" round dense icon="menu" />
      <q-img :src="brandSrc" class="header__logo"></q-img>

      <q-toolbar-title>
        {{ title }}
      </q-toolbar-title>

      <div class="header-icons">
        <q-btn class="header-icons__item" dense flat rounded icon="bookmarks"></q-btn>
        <q-btn class="header-icons__item" dense flat rounded icon="cloud_download"></q-btn>
        <q-btn class="header-icons__item" dense flat rounded icon="cached"></q-btn>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script>
import { EventBus } from 'boot/EventBus'

export default {
  name: 'Header',
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
    }
  }
}
</script>

<style lang="scss">
.header {
  background-color: $secondary;
  min-height: 52px;
  padding-left: 0;
  &-icons {
    font-size: 24px;
    &__item {
      &:not(:last-child) {
        margin-right: 15px;
      }
    }
  }
  &__logo {
    margin-top: 1px;
    width: 119px;
    height: 49px;
  }
}
</style>
