import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import { StatusBar, StyleSheet, View } from 'react-native'

export default function Page({ title, children }) {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Header title={title} />
        {children}
        <NavBar />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blueviolet',
  },
})
