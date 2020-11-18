<template>
  <q-page @click="clickOutside" class="relative-position">
    <RenderedEbupFrame></RenderedEbupFrame>
    <div v-show="showUserInterface" class="navigation">
      <Navigation></Navigation>
    </div>
    <div v-show="showUserInterface" class="book-interface">
      <ProgressBar :chapter="chapter"></ProgressBar>
    </div>
    <q-inner-loading :showing="showPreloader">
      <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>
  </q-page>
</template>

<script>

import { mapGetters } from 'vuex'
import RenderedEbupFrame from 'components/Reader/RenderedEbupFrame'
import ProgressBar from 'components/Reader/UserInterface/ProgressBar'
import Navigation from 'components/Reader/UserInterface/Navigation'
import { EventBus } from 'boot/EventBus'

export default {
  name: 'Reader',
  components: { Navigation, ProgressBar, RenderedEbupFrame },
  data () {
    return {
      chapter: null,
      page: null,
      showUserInterface: false,
      showPreloader: true
    }
  },
  computed: {
    ...mapGetters([
      'book'
    ])
  },
  methods: {
    clickOutside () {
      EventBus.$emit('clickOutside')
    }
  },
  mounted () {
    this.book.entity.rendition.on('rendered', () => {
      this.chapter = this.book.entity.navigation.get(this.book.entity.rendition.currentLocation().start.href).label
      this.showPreloader = false
      this.showUserInterface = true
    })
    this.book.entity.rendition.hooks.content.register(function (contents, view) {
      const elements = contents.document.getElementsByTagName('img')
      const items = Array.prototype.slice.call(elements)

      items.forEach(function (item) {
        item.addEventListener('click', () => {
          console.log(1)
        })
      })
    })
  }
}
</script>
