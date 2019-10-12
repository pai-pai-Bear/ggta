import ajax from './ajax'
const prefix = process.env.NODE_ENV === 'development' ? '/api' : 'http://m.you.163.com';

export const reqCategory = () => ajax('/category');

// 获取首页数据
export const reqHomeData = () => ajax('/home');

export const reqCategoryList = () => ajax('/knewThings')

// export const reqKnewThings = () => ajax(`${prefix}/topic/v1/find/recManual.json`)
export const reqKnewThings = () => ajax('/api/topic/v1/find/recManual.json')

export const reqHot = () => ajax('/api/xhr/search/init.json?csrf_token=bac99fe4f8963b0a4454ec4709fb6408')