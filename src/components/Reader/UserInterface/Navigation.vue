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
    async nextPage () {
      await this.book.entity.rendition.next()
      EventBus.$emit('loadPage')
    },
    async prevPage () {
      await this.book.entity.rendition.prev()
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
