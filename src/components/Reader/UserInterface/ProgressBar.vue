<template>
  <div>
    <q-linear-progress size="16px" :value="progress" color="secondary">
      <div class="absolute-full flex flex-center">
        <q-badge color="white" text-color="secondary" :label="label"/>
      </div>
    </q-linear-progress>
    <div class="flex justify-between flex-center">
      <span>Глава: {{ chapter }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ProgressBar',
  props: {
    chapter: String
  },
  data () {
    return {
      progress: null
    }
  },
  computed: {
    ...mapState([
      'book'
    ]),
    label () {
      return (this.progress * 100).toFixed(2) + '%'
    }
  }
}
</script>

<style scoped>

</style>
