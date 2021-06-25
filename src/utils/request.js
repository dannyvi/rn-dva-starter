/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as RootNavigation from '../navigator/RootNavigation'
import { Alert } from 'react-native'

const errorHandler = (error: { response: Response, data: any }): Response => {
  const {
    data: { errcode, errmsg },
    response,
  } = error
  if (!errcode && response.status >= 500) {
    console.log({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    })
  } else if (!errcode && response.status >= 400) {
    console.log({
      description: 'DEBUG',
      message: '调试错误',
    })
  } else if (response && !response.ok) {
    console.log({
      message: '请求错误',
      description: errmsg,
    })
    console.log(errmsg)
    Alert.alert(errmsg)
  }
  return response
}

const request = extend({
  prefix: 'https://taskimage.com/api/v2/app',
  errorHandler,
  credentials: 'include', // 默认请求是否带上cookie
})
request.use(async (ctx, next) => {
  const { req } = ctx
  const { url, options } = req
  let tokenSessionStorage = await AsyncStorage.getItem('token')
  console.log('url', url)
  console.log('token', tokenSessionStorage)

  if (
    (tokenSessionStorage === null || tokenSessionStorage.length === 0) &&
    !url.endsWith('/token')
  ) {
    console.log('go to login page')
    RootNavigation.navigate('Login')
    console.log('naved')
    return
  }

  if (tokenSessionStorage === null) {
    tokenSessionStorage = ''
  }

  options.headers = {
    sitesecret: 'pcsecret',
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: tokenSessionStorage,
  }

  await next()

  const { res } = ctx

  let token = res?.access_token

  if (token !== undefined && token !== null && token.length > 0) {
    token = `Bearer  ${token}`
    AsyncStorage.setItem('token', token)
    console.log('---', token)
    // RootNavigation.goBack()
    RootNavigation.navigate('Home')
  }
})

export default request
