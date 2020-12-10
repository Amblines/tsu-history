export default {
  actions: {
  },
  mutations: {
    updateSettings (state, payload) {
      state.settings[payload.key] = payload.value
    },
    addQuotes (state, payload) {
      console.log(payload.link)
      state.quotes.push({
        link: payload.link,
        text: payload.text
      })
    },
    addBookmark (state, payload) {
      state.bookmarks.push({
        link: payload.link,
        progress: payload.progress,
        chapter: payload.chapter
      })
    }
  },
  state: {
    settings: {
      cfi: null,
      brightness: 100,
      theme: 'default',
      alignment: 'justify',
      font: 'Roboto',
      fontSize: 16,
      lineHeight: 1.6
    },
    quotes: [],
    bookmarks: []
  },
  getters: {
    settings (state) {
      return state.settings
    },
    quotes (state) {
      return state.quotes
    },
    bookmarks (state) {
      return state.bookmarks
    }
  }
}
