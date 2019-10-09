import {
  RECEIVE_HOMEDATA,
  RECEIVE_CATEGORIES
} from './mutation-types'

export default {
  [RECEIVE_HOMEDATA](state, homeData) {
    state.homeData = homeData
  },
  [RECEIVE_CATEGORIES] (state, category) {
    state.category = category
  }
}