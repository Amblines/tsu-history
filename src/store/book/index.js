import Epub from 'epubjs'

export default {
  actions: {
    loadBook (ctx) {
      ctx.commit('createBook', new Epub('book.epub'))
    }
  },
  mutations: {
    createBook (state, entity) {
      state.book.entity = entity
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
