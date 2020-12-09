export default {
  actions: {
  },
  mutations: {
    updateSettings (state, payload) {
      state.settings[payload.key] = payload.value
    }
  },
  state: {
    settings: {
      brightness: 100,
      theme: 'default',
      alignment: 'justify',
      font: 'Roboto',
      fontSize: 16,
      lineHeight: 1.6
    }
  },
  getters: {
    settings (state) {
      return state.settings
    }
  }
}
