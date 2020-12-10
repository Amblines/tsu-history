<template>
  <div class="row justify-between">
    <div @click="loadPage(bookmark.link)" v-for="bookmark in bookmarks" :key="bookmark.link" class="cursor-pointer col-12 overlay-menu-card flex justify-between items-center q-mb-md bg-main-tsu-card-bg text-main-tsu-card-text">
      <div class="overlay-menu-card__content">
        <span class="overlay-menu-card__label">{{ bookmark.chapter }}</span>
        <span class="overlay-menu-card__label overlay-menu-card__label--chapter">Добавлена: 25.06.2016 в 17:49</span>
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
      this.$q.notify({
        message: 'Jim pinged you.',
        caption: '5 minutes ago',
        color: 'secondary'
      })
      EventBus.$emit('clickShowOverlayMenuButton')
      EventBus.$emit('loadCfi', link)
    }
  }
}
</script>

<style scoped>

</style>
