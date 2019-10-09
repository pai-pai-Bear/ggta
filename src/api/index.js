import ajax from './ajax'

export const reqCategory = () => ajax('/category');

// 获取首页数据
export const reqHomeData = () => ajax('/home');