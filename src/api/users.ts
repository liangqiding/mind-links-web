import request from '@/utils/request'

export const getUserInfo = (data: any) =>
  request({
    url: '/user/info/get',
    method: 'get',
    params:data
  })

export const login = (data: any) =>
  request({
    url: '/auth/login',
    method: 'post',
    data
  })

export const logout = () =>
  request({
    url: '/auth/logout',
    method: 'post'
  })
