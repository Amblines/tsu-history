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
    ]),
    label () {
      return (this.progress * 100).toFixed(2) + '%'
    }
  },
  methods: {
    async loadPage () {
      const cfi = this.book.entity.locations.cfiFromPercentage(this.progress / 100)
      await this.book.entity.rendition.display(cfi)
    }
  },
  mounted () {
    EventBus.$on('loadPage', () => {
      this.chapter = this.book.entity.navigation.get(this.book.entity.rendition.currentLocation().start.href).label
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
