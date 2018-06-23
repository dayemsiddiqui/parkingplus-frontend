import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Splash from './components/Splash'

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>This is for debugging</Text>
        <Splash />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262629',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
