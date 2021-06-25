import request from '../utils/request'

export const requestToken = async data => {
  console.log('data', data)
  return request('/token', {
    method: 'POST',
    data: data,
  })
}

export const requestCurrentUser = async () => {
  return request('/user/current-user')
}

export const requestList = async () => {
  return request('/topic')
}
