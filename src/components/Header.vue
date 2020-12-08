<template>
  <q-header elevated class="bg-main-tsu">
    <q-toolbar
      class="header"
    >
      <q-img :src="brandSrc" class="header__logo"></q-img>

      <h1 class="header__title text-dark">
        {{ title }}
      </h1>

      <q-space></q-space>

      <div class="header-icons">
        <q-btn class="header-icons__item" dense flat>
          <q-icon class="header-icons__icon" name="search"></q-icon>
        </q-btn>
        <q-btn class="header-icons__item" dense flat>
          <q-icon class="header-icons__icon" name="bookmark"></q-icon>
        </q-btn>
        <q-btn class="header-icons__item" dense flat>
          <q-icon class="header-icons__icon" name="menu"></q-icon>
        </q-btn>
        <q-btn @click="clickDrawerButton" class="header-icons__item" dense flat>
          <q-icon class="header-icons__icon" name="settings"></q-icon>
        </q-btn>
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

<style lang="scss" scoped>
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
      font-size: 20px;
      &:not(:last-child) {
        margin-right: 30px;
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
