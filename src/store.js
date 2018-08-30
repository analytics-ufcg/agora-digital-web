import Vue from 'vue'
import Vuex from 'vuex'
import Vapi from 'vuex-rest-api'

Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {

//   },
//   mutations: {

//   },
//   actions: {

//   }
// })

const proposicoes = new Vapi({
  baseURL: 'http://localhost:8000',
  state: {
    proposicoes: []
  }
}).get({
  action: 'getProposicao',
  property: 'proposicao',
  path: ({ casa, idExt }) => `/proposicoes/${casa}/${idExt}`
}).get({
  action: 'listProposicoes',
  property: 'proposicoes',
  path: '/proposicoes'
}).getStore()

export default new Vuex.Store(proposicoes)
