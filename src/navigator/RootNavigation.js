import * as React from 'react'
import { StackActions } from '@react-navigation/native'

export const isReadyRef = React.createRef()

export const navigationRef = React.createRef()

export function navigate(name, params) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params)
  } else {
    console.log('not ready')
  }
}

export function push(name, params) {
  if (isReadyRef.current && navigationRef.current) {
    console.log('pushing ')
    // console.log(navigationRef.current)
    // console.log(navigationRef.current.dispatch)
    navigationRef.current?.dispatch(StackActions.push(name, params))
    console.log('finished')
  } else {
    console.log('not ready')
  }
}

export function goBack() {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.goBack()
  } else {
    console.log('not ready')
  }
}
