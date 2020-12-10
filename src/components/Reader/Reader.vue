<template>
  <q-page @click="clickOutside" class="relative-position">
    <RenderedEbupFrame></RenderedEbupFrame>
    <div v-show="showUserInterface" class="navigation">
      <Navigation></Navigation>
    </div>
    <div v-show="showUserInterface" class="book-interface">
      <ProgressBar></ProgressBar>
    </div>
    <q-inner-loading :showing="showPreloader">
      <q-spinner-gears size="50px" color="#0F0F0F" />
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
    EventBus.$on('bookRendered', () => {
      this.showUserInterface = true
      this.showPreloader = false
    })
  }
}
</script>
