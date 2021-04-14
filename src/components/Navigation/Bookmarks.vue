<template>
  <div class="row justify-between">
    <div @click="loadPage(bookmark.link)" v-for="bookmark in bookmarks" :key="bookmark.link" class="cursor-pointer col-12 overlay-menu-card flex justify-between items-center q-mb-md bg-main-tsu-card-bg text-main-tsu-card-text">
      <div class="overlay-menu-card__content">
        <span class="overlay-menu-card__label">{{ bookmark.chapter }}</span>
      </div>
      <div class="overlay-menu-card__info">
        <span>{{ bookmark.progress }}%</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { EventBus } from 'boot/EventBus'

export default {
  name: 'Bookmarks',
  computed: {
    ...mapGetters([
      'bookmarks'
    ])
  },
  methods: {
    loadPage (link) {
      EventBus.$emit('clickShowOverlayMenuButton')
      EventBus.$emit('loadCfi', link)
    }
  }
}
</script>

<style scoped>

</style>
