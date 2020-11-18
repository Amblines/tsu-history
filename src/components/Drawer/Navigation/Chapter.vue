<template>
  <q-list bordered class="no-padding">
    <q-item-label class="chapter-header text-white no-padding" header>Главы</q-item-label>

    <q-item class="no-padding" clickable v-ripple @click="loadPage(chapter.link)" v-for="chapter in book.chapters" :key="chapter.label">
      <q-item-section avatar>
        <q-avatar square>
          <img src="chapter.jpg">
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ chapter.label }}</q-item-label>
      </q-item-section>

    </q-item>
  </q-list>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Chapter',
  computed: {
    ...mapGetters([
      'book'
    ])
  },
  methods: {
    loadPage (href) {
      this.book.entity.rendition.display(href)
    }
  }
}
</script>

<style scoped>
  .chapter-header {
    display: inline-block;
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 7px;
  }
</style>
