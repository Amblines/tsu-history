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
    removeQuotes (state, payload) {
      const index = state.quotes.indexOf(payload)
      state.quotes.splice(index, 1)
    },
    addBookmark (state, payload) {
      state.bookmarks.push({
        link: payload.link,
        progress: payload.progress,
        chapter: payload.chapter
      })
    },
    removeBookmark (state, payload) {
      const index = state.bookmarks.indexOf(payload)
      state.bookmarks.splice(index, 1)
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
