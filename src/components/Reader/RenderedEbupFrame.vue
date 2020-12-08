<template>
  <div id="epubFrame">
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'RenderedEbupFrame',
  computed: {
    ...mapGetters([
      'book'
    ])
  },
  methods: {
    ...mapActions([
      'loadBook'
    ]),
    renderBook () {
      this.book.entity.rendition = this.book.entity.renderTo('epubFrame', {
        manager: 'continuous',
        width: '100wv',
        height: 'calc(100vh - 109px)'
      })
      this.displayed = this.book.entity.rendition.display()
    }
  },
  mounted () {
    this.loadBook()
    this.renderBook()
  }
}
</script>

<style scoped>

</style>
