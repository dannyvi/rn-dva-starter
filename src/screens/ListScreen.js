import React, { useEffect } from 'react'
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

import Header from '../components/Header'
import { connect } from '../utils/connect'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as RootNavigation from '../navigator/RootNavigation'

function ListView({ home }) {
  const list = home?.data || []
  console.log('hi', home)
  return (
    <View style={styles.listContainer}>
      <Text>Here goes list items</Text>
      <Text>N</Text>
      {list.map(x => (
        <Text key={x.id}>{x.name}</Text>
      ))}
    </View>
  )
}

function ListScreen({ navigation, home, dispatch }) {
  const showList = () => {
    dispatch({
      type: 'home/showList',
    })
    navigation.navigate('List')
  }
  const hideList = () => {
    dispatch({
      type: 'home/hideList',
    })
  }

  useEffect(() => {
    dispatch({
      type: 'home/currentUser',
    })
  }, [dispatch])

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Header title={'List'} />
        <ListView home={home} />
        <View style={styles.fabContainer}>
          <TouchableOpacity
            onPress={() => {
              // AsyncStorage.removeItem('token')
              RootNavigation.push('Home')
            }}
            style={styles.fabButton}>
            <Text style={styles.button}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={hideList} style={styles.fabButton}>
            <Text style={styles.button}>Hide</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={showList} style={styles.fabButton}>
            <Text style={styles.button}>Show</Text>
            {/*<Ionicons name='ios-add' color='#fff' size={70} />*/}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => RootNavigation.navigate('Modal')}
            style={styles.fabButton}>
            <Text style={styles.button}>Hi</Text>
            {/*<Ionicons name='ios-add' color='#fff' size={70} />*/}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.fabButton}>
            <Text style={styles.button}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              AsyncStorage.removeItem('token')
              RootNavigation.push('Login')
            }}
            style={styles.fabButton}>
            <Text style={styles.button}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blueviolet',
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
}))(ListScreen)
