import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { connect } from '../utils/connect'
import Page from '../components/Page'

function ListView({ home }) {
  const list = home?.data || []
  console.log('hi', home)
  return (
    <View style={styles.listContainer}>
      <Text style={styles.text}>Here goes list items</Text>
      {list.map(x => (
        <Text style={styles.text} key={x.id}>
          {x.name}
        </Text>
      ))}
    </View>
  )
}

function HomeScreen({ home, dispatch }) {
  useEffect(() => {
    dispatch({
      type: 'home/currentUser',
    })
    dispatch({
      type: 'home/showList',
    })
  }, [dispatch])

  return (
    <Page title="Home">
      <ListView home={home} />
    </Page>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'lightyellow',
    padding: 2,
  },
  listContainer: {
    backgroundColor: '#205d40',
    color: 'white',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
})

export default connect(({ home, loading }) => ({
  home,
  dataLoading: loading.effects['home/showList'],
}))(HomeScreen)
