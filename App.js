import React from 'react'
import Splash from './components/Splash'
import Result from './components/Result'
import Details from './components/Details'
import { createStackNavigator } from 'react-navigation'

export default class App extends React.Component {
  render () {
    return (
      <AppNavigator />
    )
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: Splash
  },
  Result: {
    screen: Result
  },
  Details: {
    screen: Details
  }
}, {
  initialRouteName: 'Home',
  headerMode: 'none'
})
