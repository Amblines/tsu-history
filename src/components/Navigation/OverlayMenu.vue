<template>
  <transition appear
              enter-active-class="animated fadeInUp"
              leave-active-class="animated fadeOutDown"
  >
    <div v-show="showOverlayMenu" class="overlay-menu bg-main-tsu">
      <q-tabs
        v-model="tab"
        class="bg-main-tsu overlay-menu-header main-tsu-buttons-bg"
        align="justify"
        active-color="primary"
        no-caps
        content-class="overlay-menu-header"
      >
        <q-tab content-class="overlay-menu-header__tab" name="chapters" label="Оглавление" />
        <q-tab content-class="overlay-menu-header__tab" name="bookmarks" label="Закладки" />
        <q-tab content-class="overlay-menu-header__tab" name="quotes" label="Цитаты" />
        <q-btn @click="closeOverlayMenu" dense flat class="text-settings__close-btn text-primary">
          <q-icon name="close"></q-icon>
        </q-btn>
      </q-tabs>
      <q-tab-panels class="full-height overlay-menu__content bg-primary" v-model="tab" animated transition-next="fade" transition-prev="fade">
        <q-tab-panel name="chapters" class="full-height bg-primary text-black">
          <div class="overlay-menu-container">
            <Chapters></Chapters>
          </div>
        </q-tab-panel>
        <q-tab-panel name="bookmarks" class="bg-main-tsu">
          <div class="overlay-menu-container">
            <Bookmarks></Bookmarks>
          </div>
        </q-tab-panel>
        <q-tab-panel name="quotes" class="bg-main-tsu">
          <div class="overlay-menu-container">
            <Quotes></Quotes>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </transition>
</template>

<script>
import { EventBus } from 'boot/EventBus'
import Bookmarks from 'components/Navigation/Bookmarks'
import Quotes from 'components/Navigation/Quotes'
import Chapters from 'components/Navigation/Chapters'

export default {
  name: 'OverlayMenu',
  components: { Chapters, Quotes, Bookmarks },
  data () {
    return {
      tab: 'quotes',
      showOverlayMenu: false
    }
  },
  mounted () {
    EventBus.$on('clickShowOverlayMenuButton', () => {
      this.showOverlayMenu = !this.showOverlayMenu
    })
  },
  methods: {
    closeOverlayMenu () {
      this.showOverlayMenu = false
    }
  }
}
</script>

<style lang="scss">
.overlay-menu {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 999;
  .q-tab__panels {
    background: none;
  }
  .q-tab__indicator {
    display: none;
  }
  &-container {
    padding: 10px 40px 100px;
  }
  &-header {
    &__tab {
      .q-tab__label {
        font-size: 28px;
        line-height: 28px;
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
