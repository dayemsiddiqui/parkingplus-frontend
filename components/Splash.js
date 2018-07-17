import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Button } from 'react-native-elements'

export default class Splash extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Parking Plus</Text>

        <Text style={styles.subtitle}>Discover & Book Unique Spaces for Your Upcoming Activity</Text>

        <TextInput
          autoCorrect={false}
          underlineColorAndroid='rgba(0,0,0,0)'
          style={styles.cityInput}
          onChangeText={(text) => this.setState({text})}
          value={'New York, NY, USA'}
        />

        <TextInput
          autoCorrect={false}
          underlineColorAndroid='rgba(0,0,0,0)'
          style={styles.cityInput}
          onChangeText={(text) => this.setState({text})}
          value={'Meeting'}
        />

        <Button
          backgroundColor='#FFD64B'
          color='black'
          title='Search'
          onPress={() => this.props.navigation.navigate('Result')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262629',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 50
  },
  heading: {
    fontSize: 25,
    color: 'white'
  },
  subtitle: {
    fontSize: 12,
    color: 'white',
    justifyContent: 'center'
  },
  cityInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0,
    backgroundColor: 'white',
    padding: 5,
    marginBottom: 10,
    marginTop: 10
  }
})
