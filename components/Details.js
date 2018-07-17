import React from 'react'
import { StyleSheet, ScrollView, Text, Image, TextInput } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'

export default class Details extends React.Component {
  constructor (props) {
    super(props)
    this.state = {date: '2016-05-15'}
  }

  render () {
    return (
      <ScrollView>
        <Card
          title='Sponsored Former Foundry with Old World Charm'
          containerStyle={{ backgroundColor: '#F2F2F2' }}
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

          <Text style={{marginBottom: 10}}>
           Enter your specific activity
          </Text>

          <TextInput
            autoCorrect={false}
            underlineColorAndroid='rgba(0,0,0,0)'
            style={styles.cityInput}
            onChangeText={(text) => this.setState({text})}
            value={'Photo Shoot'}
          />

          <Text style={{marginBottom: 10}}>
           Booking Date
          </Text>

          <DatePicker
            style={{width: 200}}
            date={this.state.date}
            mode='date'
            placeholder='select date'
            format='YYYY-MM-DD'
            minDate='2016-05-01'
            maxDate='2016-06-01'
            confirmBtnText='Confirm'
            cancelBtnText='Cancel'
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => { this.setState({date: date}) }}
          />

          <Text style={{marginBottom: 10}}>
           Guests
          </Text>

          <TextInput
            autoCorrect={false}
            underlineColorAndroid='rgba(0,0,0,0)'
            style={styles.cityInput}
            onChangeText={(text) => this.setState({text})}
            value={'50 Max'}
          />

          <Button
            icon={<Icon name='code' color='#ffffff' />}
            backgroundColor='#FFD64B'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='MESSAGE OWNER' />
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
