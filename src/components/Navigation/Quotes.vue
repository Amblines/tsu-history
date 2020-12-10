<template>
  <div class="row justify-between">
    <div
      class="cursor-pointer col-md-12 overlay-menu-card flex justify-between items-center q-mb-md no-wrap bg-main-tsu-card-bg text-main-tsu-card-text"
      v-for="quote in quotes" :key="quote.link" @click="loadQuote(quote.link)">
      <div class="overlay-menu-card__content">
        <span class="overlay-menu-card__label overlay-menu-card__label--quotes">{{ quote.text | cutText(200) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { EventBus } from 'boot/EventBus'

export default {
  name: 'Quotes',
  computed: {
    ...mapGetters([
      'quotes'
    ])
  },
  filters: {
    cutText (value, symbolsCount) {
      return value.length > symbolsCount
        ? value.slice(0, symbolsCount - 3) + '...'
        : value
    }
  },
  methods: {
    loadQuote (link) {
      EventBus.$emit('loadCfi', link)
      EventBus.$emit('clickShowOverlayMenuButton')
    }
  }
}
</script>

<style scoped>

</style>
