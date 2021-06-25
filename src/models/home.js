import { requestToken, requestList, requestCurrentUser } from '../services/home'

const home = {
  namespace: 'home',
  state: {
    data: [],
    v: '1.0',
    verCode: '',
    number: 1,
    content: [],
    currentUser: {},
  },
  effects: {
    *showList(_, { call, put }) {
      const res = yield call(requestList)
      console.log('topics', res)
      yield put({
        type: 'save',
        payload: { data: res?.results },
      })
    },
    *hideList(_, { put }) {
      yield put({
        type: 'save',
        payload: { data: [] },
      })
    },
    *getToken({ payload }, { call }) {
      console.log('payload', payload)
      const res = yield call(requestToken, payload)
      console.log('res', res)
      // yield put({
      //   type: 'save',
      //   payload: res,
      // })
    },
    *currentUser(_, { call, put }) {
      const res = yield call(requestCurrentUser)
      console.log('current user', res)
      yield put({
        type: 'save',
        payload: { currentUser: res },
      })
    },
  },

  reducers: {
    save(state, { payload }) {
      console.log('payload', payload)
      return { ...state, ...payload }
    },
  },
}

export default home
