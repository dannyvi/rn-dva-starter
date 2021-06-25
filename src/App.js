import * as React from 'react'
import indexModel from './models/index'
import dva from './utils/dva'
import { Provider } from 'react-redux'
import MainStackNavigator from './navigator/AppNavigator'

const models = indexModel

const dvaApp: any = dva.createApp({
  initialState: {},
  models: models,
})

const store = dvaApp.getStore()
const App: () => Node = () => {
  return (
    <Provider store={store}>
      <MainStackNavigator />
    </Provider>
  )
}

export default App
