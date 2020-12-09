export default {
  actions: {
  },
  mutations: {
    createBook (state, entity) {
      state.book.rendition = {}
    }
  },
  state: {
    book: {}
  },
  getters: {
    book (state) {
      return state.book
    }
  }
}
