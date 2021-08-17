import vue from 'vue'
import vueX from 'vuex'
import state from './state'
import mutations from './mutations'

vue.use(vueX)

export default new vueX.Store({
  state,
  mutations
})
