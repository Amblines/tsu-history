<template>
  <div class="row items-center text-settings__section">
    <div class="col-12">
      <div class="column settings-items-header">
        <span>Яркость</span>
      </div>
    </div>
    <div class="col-12 flex justify-end on-left">
      <q-slider v-model="brightness" color="white" :min="0" :max="100"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Brightness',
  data () {
    return {
      brightness: 10
    }
  },
  computed: {
    ...mapGetters([
      'book'
    ])
  }
}
</script>

<style scoped>

</style>
