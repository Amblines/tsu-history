<template>
  <div>
    <div class="bg-main-tsu progress-bar-custom">
      <div class="flex items-center justify-between no-wrap">
        <span class="text-white progress-bar__title">Прочитано: {{ progress }} % ({{ this.chapter }})</span>
        <q-btn @click="addBookmark" class="header-icons__item" dense flat size="16px">
          <q-icon class="header-icons__icon" name="bookmark" color="primary"></q-icon>
        </q-btn>
      </div>
      <q-slider @change="loadPage" color="white" v-model="progress" :min="0" :max="100"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { EventBus } from 'boot/EventBus'

export default {
  name: 'ProgressBar',
  data () {
    return {
      progress: 0,
      chapter: null
    }
  },
  computed: {
    ...mapGetters([
      'book'
    ])
  },
  methods: {
    async loadPage () {
      EventBus.$emit('loadPageFromPercents', this.progress / 100)
    },
    addBookmark () {
      EventBus.$emit('addBookmark')
    }
  },
  mounted () {
    EventBus.$on('updateProgressBar', (entity) => {
      this.progress = Math.floor(entity.locations.percentageFromCfi(entity.rendition.currentLocation().start.cfi) * 100)
      this.chapter = entity.navigation.get(entity.rendition.currentLocation().start.href).label
    })
  }
}
</script>

<style scoped lang="scss">
.progress-bar-custom {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 20px 100px 10px;
  opacity: .85;
  @media screen and (max-width: $breakpoint-sm){
    padding: 20px 10px 10px;
  }
}

.progress-bar__title {
  display: inline-block;
  font-family: 'Helvetica', sans-serif;
  margin-bottom: 5px;
}
</style>
