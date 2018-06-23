import React from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

export default class Splash extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Find Your Space</Text>

        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={'San Francisco'}
        />

        <Button
          onPress={() => { }}
          title='Search'
          color='#841584'
          accessibilityLabel='Learn more about this purple button'
        />
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
  },
  heading: {
    fontSize: 25,
    color: 'white'
  },
  subtitle: {
    fontSize: 12,
    color: 'white'
  }
})
