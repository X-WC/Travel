import vue from 'vue'
import vueX from 'vuex'

vue.use(vueX)

export default new vueX.Store({
  state: {
    city: '北京'
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
    }
  }
})
