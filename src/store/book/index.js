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
      state.book.entity.loaded.navigation.then((toc) => {
        const arr = []
        toc.forEach((chapter) => {
          arr.push({
            label: chapter.label,
            link: chapter.href
          })
        })
        state.book.chapters = arr
      })
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
