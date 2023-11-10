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

//更新个人信息

export const userUpdateUserInfoService = ({ id, nickname, email }) => {
  return instance.put('/my/userinfo', {
    id,
    nickname,
    email
  })
}

//更新头像

export const userUpdateAvatarService = (avatar) => {
  return instance.patch('/my/update/avatar', {
    avatar
  })
}

export const userUpdatePasswordService = ({ old_pwd, new_pwd, re_pwd }) => {
  return instance.patch('/my/updatepwd', {
    old_pwd,
    new_pwd,
    re_pwd
  })
}
