<template>
  <div id="epubFrame">
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { EventBus } from 'boot/EventBus'
import Epub from 'epubjs'
import { colors } from 'quasar'
export default {
  name: 'RenderedEbupFrame',
  data () {
    return {
      bookRendered: {}
    }
  },
  computed: {
    ...mapGetters([
      'book',
      'settings'
    ])
  },
  methods: {
    ...mapMutations([
      'createBook'
    ]),
    async renderBook () {
      this.bookRendered = Epub('https://s3.amazonaws.com/epubjs/books/moby-dick/OPS/package.opf')

      this.bookRendered.rendition = this.bookRendered.renderTo('epubFrame', {
        manager: 'continuous',
        width: '100wv',
        height: 'calc(100vh - 109px)'
      })

      this.bookRendered.rendition.on('rendered', () => {
        EventBus.$emit('bookRendered')
      })

      this.bookRendered.ready.then(() => {
        this.bookRendered.locations.generate()
      })

      this.loadUserSettings()

      await this.bookRendered.rendition.display()
    },
    loadUserSettings () {
      EventBus.$emit('changeThemeOptions', ['default', { p: { 'font-family': this.settings.font + ' !important' } }])
      EventBus.$emit('changeThemeOptions', ['default', { p: { 'text-align': this.settings.alignment + ' !important' } }])
      EventBus.$emit('changeThemeOptions', ['default', { p: { 'line-height': this.settings.lineHeight + ' !important' } }])
      EventBus.$emit('changeThemeOptions', ['fontSize', this.settings.fontSize + 'px'])
      EventBus.$emit('loadTheme', this.settings.theme)
      colors.setBrand('primary', colors.lighten('#000', this.settings.brightness), document.getElementById('q-app'))
      EventBus.$emit('changeThemeOptions', ['default', { body: { 'background-color': colors.lighten('#000', this.settings.brightness) } }])
      EventBus.$emit('changeThemeOptions', ['default', { body: { color: colors.lighten('#fff', -this.settings.brightness) + '!important' } }])
    }
  },
  mounted () {
    EventBus.$on('changeThemeOptions', (args) => {
      this.bookRendered.rendition.themes[args[0]](args[1])
    })
    EventBus.$on('changePage', (value) => {
      this.bookRendered.rendition[value]()
    })
    this.renderBook()
  }
}
</script>

<style scoped>

</style>
