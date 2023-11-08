import instance from '@/utils/request.js'

//注册接口
export const userRegisterService = ({ username, password, repassword }) => {
  return instance.post('/api/reg', { username, password, repassword })
}

//登录
export const userLoginService = ({ username, password }) => {
  return instance.post('/api/login', { username, password })
}

//获取用户信息

export const userGetUserInfoService = () => {
  return instance.get('/my/userinfo')
}
