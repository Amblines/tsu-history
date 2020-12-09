<template>
  <div>
    <q-btn flat rounded @click="prevPage" class="navigation-arrow navigation-arrow--left absolute" color="main-tsu-buttons-bg" icon="keyboard_arrow_left"/>
    <q-btn flat rounded @click="nextPage" class="navigation-arrow navigation-arrow--right absolute" color="main-tsu-buttons-bg"
           icon="keyboard_arrow_right"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { EventBus } from 'boot/EventBus'
export default {
  name: 'Navigation',
  computed: {
    ...mapGetters([
      'book'
    ])
  },
  methods: {
    nextPage () {
      EventBus.$emit('changePage', 'next')
      EventBus.$emit('loadPage')
    },
    prevPage () {
      EventBus.$emit('changePage', 'prev')
      EventBus.$emit('loadPage')
    }
  }
}
</script>

<style scoped lang="scss">
.navigation-arrow {
  top: 45%;

  &--left {
    left: 10px
  }

  &--right {
    right: 10px;
    transform: rotate(360deg);
  }
}
</style>
