<template>
  <div class="row justify-between">
    <div
      class="cursor-pointer col-12 overlay-menu-card flex justify-between items-center q-mb-md no-wrap bg-main-tsu-card-bg text-main-tsu-card-text"
      v-for="quote in quotes" :key="quote.link" @click="loadQuote(quote.link)">
      <div class="overlay-menu-card__content">
        <span class="overlay-menu-card__label overlay-menu-card__label--quotes full-width">{{ quote.text | cutText(200) }}</span>
      </div>
      <q-btn
        icon="close"
        flat
        round
        size="18px"
        @click.stop="remove(quote)"
      >
      </q-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
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
    ...mapMutations([
      'removeQuotes'
    ]),
    loadQuote (link) {
      EventBus.$emit('loadCfi', link)
      EventBus.$emit('clickShowOverlayMenuButton')
    },
    remove (quote) {
      this.removeQuotes(quote)
      this.$q.notify({
        type: 'positive',
        message: 'Цитата успешно удалена.'
      })
    }
  }
}
</script>

<style scoped>

</style>
