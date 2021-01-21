import request from '@/utils/request'

export const createBucket = (params: any) =>
  request({
    url: '/minio/create/bucket',
    method: 'get',
    params
  })

export const login = (data: any) =>
  request({
    url: '/users/login',
    method: 'post',
    data
  })

export const logout = () =>
  request({
    url: '/users/logout',
    method: 'post'
  })
