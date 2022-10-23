export const state = () => ({
  counter: 0,
  articles: [],
})

export const getters = {
  getCounter(state) {
    return state.counter
  },
}

export const mutations = {
  increment(state) {
    state.counter++
  },
  setArticles(state, articles) {
    state.articles = articles
  },
}

export const actions = {
  async getArticles({ state, commit }) {
    const api = "https://jsonplaceholder.typicode.com/posts"
    const res = await this.$axios.$get(api)

    commit("setArticles", res)

    return res
  },
}
