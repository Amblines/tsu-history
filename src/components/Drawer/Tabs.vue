<template>
  <div class="relative-position">
    <q-tabs
      v-model="tab"
      vertical
      dense
      class="tabs-drawer text-white"
      active-bg-color="primary"
      indicator-color="primary"
    >
      <q-tab content-class="tabs-drawer__link" name="search" icon="search" label="Поиск" />
      <q-tab content-class="tabs-drawer__link" name="chapters" icon="chrome_reader_mode" label="Главы" />
      <q-tab content-class="tabs-drawer__link" name="text-settings" icon="format_size" label="Текст" />
    </q-tabs>
    <div>
      <q-tab-panels v-if="tab" class="tabs-drawer-sub-panel fixed-top bg-primary text-white" v-model="tab">
        <q-tab-panel name="search">
          <q-btn @click="tab = ''" flat rounded dense icon="close" class="close-sub-menu"></q-btn>
          <Search></Search>
        </q-tab-panel>

        <q-tab-panel name="chapters">
          <q-btn @click="tab = ''" flat rounded dense icon="close" class="close-sub-menu"></q-btn>
          <Chapter></Chapter>
        </q-tab-panel>

        <q-tab-panel name="text-settings">
          <q-btn @click="tab = ''" flat rounded dense icon="close" class="close-sub-menu"></q-btn>
          <TextSettings></TextSettings>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>

import Chapter from 'components/Drawer/Navigation/Chapter'
import TextSettings from 'components/Drawer/Navigation/TextSettings'
import Search from 'components/Drawer/Navigation/Search'
import { EventBus } from 'boot/EventBus'

export default {
  name: 'Tabs',
  components: { Search, TextSettings, Chapter },
  data () {
    return {
      tab: ''
    }
  },
  mounted () {
    EventBus.$on('clickOutside', () => {
      this.tab = ''
    })
  }
}
</script>

<style lang="scss">
.tabs-drawer {
  &__link {
    padding: 10px 0;
    text-transform: none;
    font-size: 20px;
    .q-tab__label {
      margin-top: 5px;
      font-size: 13px;
    }
    .q-tab__icon {
      font-size: 35px;
      width: 100%;
    }
  }
  &-sub-panel {
    height: calc(100vh - 52px);
    min-width: 260px;
    left: 71px;
    @media screen and (max-width: $breakpoint-md-min){
      height: 100vh;
    }
  }
}

.close-sub-menu {
  position: absolute;
  top: 14px;
  right: 10px;
}

.bg-tabs-drawer--active {
  background: #000080 !important;
}
</style>
