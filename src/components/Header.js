import { Text, View, StyleSheet } from 'react-native'
import React from 'react'

const Header = props => {
  const { title } = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2a1265',
    height: 80,
    paddingTop: 30,
  },
  text: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '500',
  },
})

export default Header
