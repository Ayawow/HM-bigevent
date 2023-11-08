import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userGetUserInfoService } from '../../api/user'
export const useUserStore = defineStore(
  'sp-user',
  () => {
    const token = ref('')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }

    const user = ref({})
    const getUser = async () => {
      const res = await userGetUserInfoService()
      user.value = res.data.data
    }
    const setUser = (obj) => {
      user.value = obj
    }

    return {
      token,
      setToken,
      removeToken,
      user,
      getUser,
      setUser
    }
  },
  {
    persist: true
  }
)
