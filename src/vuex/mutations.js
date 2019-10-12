import {
  RECEIVE_HOMEDATA,
  RECEIVE_CATEGORIES,
  RECEIVE_CATEGORYLIST,
  RECEIVE_THINGS,
  RECEIVE_HOT,
} from './mutation-types'

export default {
  [RECEIVE_HOMEDATA](state, homeData) {
    state.homeData = homeData
  },
  [RECEIVE_CATEGORIES] (state, category) {
    state.category = category
  },
  [RECEIVE_CATEGORYLIST](state, categoryList) {
    state.categoryList = categoryList
  },
  [RECEIVE_THINGS](state, things) {
    state.things = things
  },
  [RECEIVE_HOT](state, hots) {
    state.hots = hots
  }
}