<template>
  <q-header elevated>
    <q-toolbar
      class="header"
    >
      <q-img :src="brandSrc" class="header__logo"></q-img>

      <q-toolbar-title>
        {{ title }}
      </q-toolbar-title>

      <div class="header-icons">
        <q-btn flat rounded icon="bookmarks"></q-btn>
        <q-btn flat rounded icon="cloud_download"></q-btn>
        <q-btn flat rounded icon="cached"></q-btn>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script>
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
  }
}
</script>

<style lang="scss">
.header {
  background-color: $main-tsu;
  min-height: 52px;
  padding-left: 0;
  &-icons {
    font-size: 24px;
    &__item {
      &:not(:last-child) {

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
