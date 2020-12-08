<script>
import { colors } from 'quasar'
import { EventBus } from 'boot/EventBus'

const { setBrand } = colors

export default {
  name: 'ThemeObserver',
  data () {
    return {
      themes: [
        {
          name: 'default',
          options: {
            'main-tsu': '#002698',
            'main-tsu-buttons-bg': '#fff',
            'main-tsu-buttons-icon': '#0F0F0F'
          }
        },
        {
          name: 'darken',
          options: {
            'main-tsu': '#0F0F0F',
            'main-tsu-buttons-bg': '#0F0F0F',
            'main-tsu-buttons-icon': '#fff'
          }
        }
      ]
    }
  },
  mounted () {
    EventBus.$on('loadTheme', (theme) => {
      const selectedTheme = this.themes.find((item) => {
        return item.name === theme
      })
      for (const prop in selectedTheme.options) {
        setBrand(prop, selectedTheme.options[prop])
      }
    })
  }
}
</script>

<style scoped>

</style>
