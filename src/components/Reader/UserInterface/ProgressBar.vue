<template>
  <div>
    <div class="bg-main-tsu progress-bar-custom">
      <span class="text-white progress-bar__title">Прочитано: {{ progress }} % ({{ this.chapter }})</span>
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
    }
  },
  mounted () {
    EventBus.$on('updateProgressBar', (entity) => {
      this.chapter = entity.navigation.get(entity.rendition.currentLocation().start.href).label
      this.progress = (entity.locations.percentageFromCfi(entity.rendition.currentLocation().start.cfi) * 100).toFixed(0)
    })
  }
}
</script>

<style scoped>
.progress-bar-custom {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 20px 100px 10px;
  opacity: .85;
}

.progress-bar__title {
  display: inline-block;
  font-family: 'Helvetica', sans-serif;
  margin-bottom: 5px;
}
</style>
