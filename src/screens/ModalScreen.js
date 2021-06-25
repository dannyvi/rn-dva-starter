import React, { useState } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from 'react-native'

function ModalScreen({ navigation }) {
  let [value, setValue] = useState('')
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.closeButtonContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => navigation.goBack()}>
            <Text>List</Text>
            {/*<Ionicons name="ios-close" color="#101010" size={40} />*/}
          </TouchableOpacity>
        </View>
        <View style={styles.modalContainer}>
          <Text style={styles.titleContainer}>What do you want to do?</Text>
          <TextInput
            style={styles.textContainer}
            numberOfLines={1}
            onChangeText={setValue}
            value={value}
            clearButtonMode="while-editing"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    height: '30%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
  },
  closeButtonContainer: {
    position: 'absolute',
    alignItems: 'flex-end',
    right: 10,
  },
  closeButton: {
    backgroundColor: '#d3d3d3',
    borderRadius: 20,
    width: 40,
    height: 40,
    top: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    margin: 60,
    top: 10,
    left: 50,
  },
  textContainer: {
    height: 50,
    width: 200,
    padding: 5,
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
  titleContainer: {
    color: '#444',
    fontSize: 20,
  },
})

export default ModalScreen
