import React, { useCallback, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { useForm } from 'react-hook-form'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { IconFontAwesome } from '../../assets/vectorIcons'
import { connect } from '../../utils/connect'

function Login({ dispatch }) {
  const { handleSubmit, register, setValue } = useForm()
  const onSubmit = useCallback(
    formData => {
      console.log(formData)
      dispatch({
        type: 'home/getToken',
        payload: formData,
      })
    },
    [dispatch],
  )

  const onLogout = () => {
    AsyncStorage.removeItem('token')
  }

  const onChangeField = useCallback(
    name => text => {
      setValue(name, text)
    },
    [setValue],
  )

  useEffect(() => {
    register('username')
    register('password')
  }, [register])

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Login</Text>
      </View>
      <View style={styles.space} />
      <Input
        selectionColor="white"
        inputContainerStyle={styles.input}
        inputStyle={styles.input}
        leftIcon={<IconFontAwesome name="user" size={18} color="#00ff38" />}
        placeholderTextColor="#99cc9e"
        autoCompleteType="username"
        autoCapitalize="none"
        keyboardType="default"
        textContentType="username"
        placeholder="username"
        onChangeText={onChangeField('username')}
      />
      <Input
        selectionColor="white"
        inputContainerStyle={styles.input}
        inputStyle={styles.input}
        leftIcon={<IconFontAwesome name="lock" size={18} color="#ff3e00" />}
        placeholderTextColor="#99cc9e"
        secureTextEntry
        autoCompleteType="password"
        placeholder="password"
        onChangeText={onChangeField('password')}
      />
      <Button
        title="Login"
        type="solid"
        onPress={handleSubmit(onSubmit)}
        {...createButtonStyles('yellow', 'blue')}
      />
      <Button
        title="Logout"
        type="solid"
        onPress={onLogout}
        {...createButtonStyles('#d08aeb', 'white')}
      />
    </View>
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
    backgroundColor: '#210943',
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#2a1265',
    height: 200,
    paddingTop: 130,
  },
  headerText: {
    color: '#f9b',
    fontSize: 28,
    fontWeight: '800',
  },
  fabContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
    bottom: 20,
  },
  fabButton: {
    backgroundColor: 'yellow',
    borderRadius: 10,
    width: 200,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 60,
  },
  input: {
    backgroundColor: '#261067',
    borderBottomWidth: 0,
    color: '#aaeeab',
    paddingHorizontal: 10,
  },
  buttonElement: {
    backgroundColor: 'yellow',
    color: 'red',
  },
  buttonElementContainer: {
    margin: 10,
    borderRadius: 20,
  },
  buttonElementTitle: {
    color: 'blue',
  },
  button: {
    backgroundColor: 'darkorange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  space: {
    marginTop: 30,
  },
})

export default connect(({ login, loading }) => ({
  login,
  loading: loading.login,
}))(Login)
