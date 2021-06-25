import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

// import AsyncStorage from '@react-native-async-storage/async-storage'
import * as RootNavigation from '../navigator/RootNavigation'
import { IconAnt } from '../assets/vectorIcons'

function NavBar() {
  return (
    <View style={styles.fabContainer}>
      <TouchableOpacity
        onPress={() => RootNavigation.navigate('Home')}
        style={styles.fabButton}>
        <IconAnt name="home" size={18} color="#ff3e00" />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => RootNavigation.navigate('My')}
        style={styles.fabButton}>
        <IconAnt name="user" size={18} color="#ff3e00" />
        <Text style={styles.text}>My</Text>
      </TouchableOpacity>
      {/*<TouchableOpacity*/}
      {/*  onPress={() => RootNavigation.navigate('Login')}*/}
      {/*  style={styles.fabButton}>*/}
      {/*  <IconAnt name="user" size={18} color="#ff3e00" />*/}
      {/*  <Text style={styles.text}>Login</Text>*/}
      {/*</TouchableOpacity>*/}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blueviolet',
  },
  fabContainer: {
    backgroundColor: '#2a1265',
    flexDirection: 'row',
    position: 'absolute',
    // right: 10,
    bottom: 0,
  },
  fabButton: {
    backgroundColor: '#2a1265',
    flex: 1,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { color: 'white' },
})

export default NavBar
