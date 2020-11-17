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
      <q-tab content-class="tabs-drawer__link" name="formatSize" icon="format_size" label="Текст" />
    </q-tabs>
    <div>
      <q-tab-panels v-if="tab" class="tabs-drawer-sub-panel fixed-top bg-primary text-white" v-model="tab">
        <q-tab-panel name="search">
          <div class="text-h6">Поиск</div>
        </q-tab-panel>

        <q-tab-panel name="chapters">
        </q-tab-panel>

        <q-tab-panel name="formatSize">
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data () {
    return {
      tab: ''
    }
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
    height: 100vh;
    width: 200px;
    left: 71px;
  }
}

.bg-tabs-drawer--active {
  background: #000080 !important;
}
</style>
