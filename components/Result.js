import React from 'react'
import { StyleSheet, ScrollView, Text, Image } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'

export default class Result extends React.Component {
  render () {
    return (
      <ScrollView>
        <Card
          title='Sponsored Former Foundry with Old World Charm'
        >
          <Image
            style={{width: 400, height: 200}}
            resizeMode='cover'
            source={{ uri: 'https://res.cloudinary.com/splacer/image/upload/c_fill,e_improve,f_jpg,g_auto,w_460/v1/production/ContentSlots/zotbl7mt6qflepfvfh4e' }}
          />
          <Text style={{marginBottom: 10}}>
           New York | Midtown
          </Text>
          <Text style={{marginBottom: 10}}>
           $350/hour | 50 persons
          </Text>
          <Button
            onPress={() => this.props.navigation.navigate('Details')}
            icon={<Icon name='code' color='#ffffff' />}
            backgroundColor='#FFD64B'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' />
        </Card>

        <Card
          title='Sponsored Former Foundry with Old World Charm'
        >
          <Image
            style={{width: 400, height: 200}}
            resizeMode='cover'
            source={{ uri: 'https://res.cloudinary.com/splacer/image/upload/c_fill,e_improve,f_jpg,g_auto,w_460/v1/production/ContentSlots/zotbl7mt6qflepfvfh4e' }}
          />
          <Text style={{marginBottom: 10}}>
           New York | Midtown
          </Text>
          <Text style={{marginBottom: 10}}>
           $350/hour | 50 persons
          </Text>
          <Button
            onPress={() => this.props.navigation.navigate('Details')}
            icon={<Icon name='code' color='#ffffff' />}
            backgroundColor='#FFD64B'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' />
        </Card>

        <Card
          title='Sponsored Former Foundry with Old World Charm'
        >
          <Image
            style={{width: 400, height: 200}}
            resizeMode='cover'
            source={{ uri: 'https://res.cloudinary.com/splacer/image/upload/c_fill,e_improve,f_jpg,g_auto,w_460/v1/production/ContentSlots/zotbl7mt6qflepfvfh4e' }}
          />
          <Text style={{marginBottom: 10}}>
           New York | Midtown
          </Text>
          <Text style={{marginBottom: 10}}>
           $350/hour | 50 persons
          </Text>
          <Button
            icon={<Icon name='code' color='#ffffff' />}
            backgroundColor='#FFD64B'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW'
            onPress={() => this.props.navigation.navigate('Details')} />
        </Card>

        <Card
          title='Sponsored Former Foundry with Old World Charm'
        >
          <Image
            style={{width: 400, height: 200}}
            resizeMode='cover'
            source={{ uri: 'https://res.cloudinary.com/splacer/image/upload/c_fill,e_improve,f_jpg,g_auto,w_460/v1/production/ContentSlots/zotbl7mt6qflepfvfh4e' }}
          />
          <Text style={{marginBottom: 10}}>
           New York | Midtown
          </Text>
          <Text style={{marginBottom: 10}}>
           $350/hour | 50 persons
          </Text>
          <Button
            icon={<Icon name='code' color='#ffffff' />}
            backgroundColor='#FFD64B'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW'
            onPress={() => this.props.navigation.navigate('Details')} />
        </Card>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262629',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  heading: {
    fontSize: 25,
    color: 'white'
  },
  subtitle: {
    fontSize: 12,
    color: 'white',
    justifyContent: 'center',
    padding: 12
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
