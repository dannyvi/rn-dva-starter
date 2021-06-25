import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'

export default ({ user }) => {
  console.log('in the Info bar')
  console.log(user)
  console.log('avatar', user?.avatar)
  return (
    <View style={styles.container}>
      <View style={styles.gridAvatar}>
        <Avatar
          rounded
          title="MT"
          size="large"
          source={{ uri: user?.avatar.replace('http', 'https') }}
          containerStyle={styles.avatar}
        />
      </View>
      <View style={styles.grid}>
        <Text style={styles.nickname}>{user?.nickname}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
  },
  avatar: {
    marginLeft: 10,
  },
  gridAvatar: {
    flex: 1,
  },
  grid: {
    flex: 3,
    padding: 10,
  },
  nickname: {
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold',
  },
})
