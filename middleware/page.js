export default ({ route, store }) => {
  if (route.name !== 'index') {
    store.commit('page/setShadow', true)
  } else {
    store.commit('page/setShadow', false)
  }
}
