<template>
  <div>
    <q-linear-progress size="16px" :value="progress" color="secondary">
      <div class="absolute-full flex flex-center">
        <q-badge color="white" text-color="secondary" :label="chapter"/>
      </div>
    </q-linear-progress>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { EventBus } from 'boot/EventBus'
export default {
  name: 'ProgressBar',
  data () {
    return {
      progress: 0.9,
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
  mounted () {
    EventBus.$on('loadPage', () => {
      this.chapter = this.book.entity.navigation.get(this.book.entity.rendition.currentLocation().start.href).label
    })
  }
}
</script>

<style scoped>

</style>
