import React, { useEffect } from 'react'
import { StyleSheet, StatusBar, View } from 'react-native'
import { connect } from '../../utils/connect'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as RootNavigation from '../../navigator/RootNavigation'
import { Button } from 'react-native-elements'
import NavBar from '../../components/NavBar'
import Info from './Info'

function MyScreen({ home, dispatch }) {
  useEffect(() => {
    dispatch({
      type: 'home/currentUser',
    })
  }, [dispatch])
  const onLogout = () => {
    AsyncStorage.removeItem('token')
    RootNavigation.navigate('Login')
  }
  console.log('home model is', home)
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Info user={home?.currentUser} />
        <Button
          title="Logout"
          type="solid"
          onPress={onLogout}
          {...createButtonStyles('#d08aeb', 'white')}
        />
        <NavBar />
      </View>
    </>
  )
}

const createButtonStyles = (bg, fr) =>
  StyleSheet.create({
    buttonStyle: {
      backgroundColor: bg,
    },
    containerStyle: {
      margin: 10,
      borderRadius: 20,
    },
    titleStyle: {
      color: fr,
    },
  })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blueviolet',
    paddingTop: 100,
  },
  fabContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
    bottom: 20,
  },
  fabButton: {
    backgroundColor: 'blue',
    borderRadius: 10,
    width: 60,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: { color: 'yellow', fontWeight: 'bold' },
  listContainer: {
    backgroundColor: 'yellow',
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 50,
  },
})

export default connect(({ home, loading }) => ({
  home,
  dataLoading: loading.effects['home/showList'],
}))(MyScreen)
