export default {
  actions: {
  },
  mutations: {
    loadChapters (state, chapters) {
      state.chapters = chapters
    }
  },
  state: {
    book: {},
    chapters: []
  },
  getters: {
    book (state) {
      return state.book
    },
    chapters (state) {
      return state.chapters
    }
  }
}
