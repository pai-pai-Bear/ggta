import {
  reqCategory,
  reqHomeData,
  reqCategoryList,
  reqKnewThings,
  reqHot
} from '../api'

import {
  RECEIVE_HOMEDATA,
  RECEIVE_CATEGORIES,
  RECEIVE_CATEGORYLIST,
  RECEIVE_THINGS,
  RECEIVE_HOT

} from './mutation-types'

export default {
  async getHomeData({commit}) {
    const result = await reqHomeData()
    if(result.code === 0) {
      commit(RECEIVE_HOMEDATA, result.data)
    }
  },

  async getCategory({commit}) {
    const result = await reqCategory()
    if(result.code === 0) {
      commit(RECEIVE_CATEGORIES, result.data)
    }
  },

  async getCategoryList({commit}) {
    const result = await reqCategoryList ()
    if(result.code === 0) {
      commit(RECEIVE_CATEGORYLIST, result.data)
    }
  },

  async getThings({commit}) {
    const result = await reqKnewThings()
    if(result.code == 200) {
      commit(RECEIVE_THINGS, result.data)
    }
  },

  async getHot({commit}) {
    const result = await reqHot()
    if(result.code == 200) {
      commit(RECEIVE_HOT, result.data)
    }
  }
}