<template>
  <div class="column">
    <q-btn @click="loadPage(chapter.link)" class="col-6" v-for="chapter in book.chapters" :key="chapter.label">
      <q-card class="text-black">
        <q-card-section>
          {{ chapter.label }}
        </q-card-section>
      </q-card>
    </q-btn>
  </div>
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
      console.log(href)
      this.book.entity.rendition.display(href)
    }
  }
}
</script>

<style scoped>

</style>
