export const state = () => ({
  isShadow: false
})

export const mutations = {
  setShadow(state, data) {
    state.isShadow = data
  }
}
