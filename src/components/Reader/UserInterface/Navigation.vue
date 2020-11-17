<template>
  <div>
    <q-btn flat rounded @click="prevPage" class="navigation-arrow navigation-arrow--left absolute" color="primary" icon="keyboard_arrow_left"/>
    <q-btn flat rounded @click="nextPage" class="navigation-arrow navigation-arrow--right absolute" color="primary"
           icon="keyboard_arrow_right"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Navigation',
  computed: {
    ...mapGetters([
      'book'
    ])
  },
  methods: {
    nextPage () {
      this.book.entity.rendition.next()
    },
    prevPage () {
      this.book.entity.rendition.prev()
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
