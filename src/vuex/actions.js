import {
  reqCategory,
  reqHomeData
} from '../api'

import {
  RECEIVE_HOMEDATA,
  RECEIVE_CATEGORIES
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
  }
}