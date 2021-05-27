<template>
  <div id="epubFrame">
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { EventBus } from 'boot/EventBus'
import Epub from 'epubjs'
import { colors } from 'quasar'
import axios from 'axios'
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
      'loadChapters',
      'updateSettings',
      'addQuotes',
      'addBookmark'
    ]),
    async renderBook () {
      const hashFile = '7TqRsFL4iGXmQvuR7n5/qg=='
      let path = ''
      if (navigator.onLine) {
        await axios.get('https://storage.googleapis.com/storage/v1/b/tsu-history/o/book.epub')
          .then((response) => {
            path = response.data.md5Hash === hashFile ? 'book.epub' : 'https://storage.googleapis.com/tsu-history/book.epub'
          })
          .catch(() => {
            path = 'book.epub'
          })
      } else {
        path = 'book.epub'
      }
      this.bookRendered = Epub(path)

      this.bookRendered.rendition = this.bookRendered.renderTo('epubFrame', {
        manager: 'continuous',
        width: '100wv',
        height: 'calc(100vh - 121px)'
      })

      this.bookRendered.rendition.on('rendered', () => {
        EventBus.$emit('bookRendered')
        EventBus.$emit('updateProgressBar', this.bookRendered)
      })

      this.bookRendered.ready.then(() => {
        this.bookRendered.locations.generate()
      })

      this.bookRendered.loaded.navigation.then((toc) => {
        const arr = []
        toc.forEach((chapter, index) => {
          arr.push({
            index: index,
            label: chapter.label,
            link: chapter.href
          })
        })
        this.loadChapters(arr)
      })

      await this.loadUserSettings()

      this.bookRendered.rendition.on('selected', (cfiRange, contents) => {
        this.bookRendered.rendition.annotations.highlight(cfiRange, {}, (e) => {
          console.log('highlight clicked', e.target)
        })
        contents.window.getSelection().removeAllRanges()
      })

      this.bookRendered.rendition.themes.default({
        '::selection': {
          background: '#A6FFB4'
        },
        '.epubjs-hl': {
          fill: '#A6FFB4', 'fill-opacity': '0.3', 'mix-blend-mode': 'multiply'
        }
      })

      this.bookRendered.rendition.on('selected', (cfiRange) => {
        this.bookRendered.getRange(cfiRange).then((range) => {
          let text = ''
          const a = document.createElement('a')

          if (range) {
            text = range.toString()

            a.textContent = cfiRange
            a.href = '#' + cfiRange
            a.onclick = () => {
              this.bookRendered.display(cfiRange)
            }
            this.$q.notify({
              type: 'positive',
              message: 'Цитата успешно сохранена.'
            })
            this.addQuotes({
              link: cfiRange,
              text: text
            })
          }
        })
      })
    },
    async loadUserSettings () {
      if (this.settings.cfi === null) {
        await this.bookRendered.rendition.display()
      } else {
        await this.bookRendered.rendition.display(this.settings.cfi)
      }
      EventBus.$emit('changeThemeOptions', ['default', { body: { 'font-family': this.settings.font + ' !important' } }])
      EventBus.$emit('changeThemeOptions', ['default', { body: { 'text-align': this.settings.alignment + ' !important' } }])
      EventBus.$emit('changeThemeOptions', ['default', { body: { 'line-height': this.settings.lineHeight + ' !important' } }])
      console.log(this.settings.lineHeight)
      EventBus.$emit('changeThemeOptions', ['fontSize', this.settings.fontSize + 'px'])
      EventBus.$emit('loadTheme', this.settings.theme)
      colors.setBrand('primary', colors.lighten('#000', this.settings.brightness), document.getElementById('q-app'))
      EventBus.$emit('changeThemeOptions', ['default', { body: { 'background-color': colors.lighten('#000', this.settings.brightness) } }])
      EventBus.$emit('changeThemeOptions', ['default', { body: { color: colors.lighten('#fff', -this.settings.brightness) + '!important' } }])
      EventBus.$emit('updateProgressBar', this.bookRendered)
    }
  },
  mounted () {
    EventBus.$on('changeThemeOptions', (args) => {
      this.bookRendered.rendition.themes[args[0]](args[1])
    })
    EventBus.$on('changePage', async (value) => {
      await this.bookRendered.rendition[value]()
      EventBus.$emit('updateProgressBar', this.bookRendered)
      this.updateSettings({
        key: 'cfi',
        value: this.bookRendered.rendition.currentLocation().start.cfi
      })
    })
    EventBus.$on('loadPageFromPercents', async (value) => {
      const cfi = this.bookRendered.locations.cfiFromPercentage(value)
      await this.bookRendered.rendition.display(cfi)
      EventBus.$emit('updateProgressBar', this.bookRendered)
      this.updateSettings({
        key: 'cfi',
        value: cfi
      })
    })
    EventBus.$on('loadCfi', async (link) => {
      await this.bookRendered.rendition.display(link)
    })
    EventBus.$on('addBookmark', async () => {
      const cfi = this.bookRendered.rendition.currentLocation().start.cfi
      this.addBookmark({
        link: cfi,
        progress: Math.floor(this.bookRendered.locations.percentageFromCfi(cfi) * 100),
        chapter: this.bookRendered.navigation.get(this.bookRendered.rendition.currentLocation().start.href).label
      })
    })
    this.renderBook()
  }
}
</script>

<style scoped>

</style>
