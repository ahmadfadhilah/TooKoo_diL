import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import Tobchat from '../../../../config/router/TobChat';
import Icon from 'react-native-vector-icons/Ionicons';

export class Message extends Component {
  render() {
    return (
      <>
        <View style={Styles.container}>
          <View style={Styles.head}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="arrow-back" size={24} style={Styles.Icon} />
            </TouchableOpacity>
              <Text style={Styles.text}>Chat</Text>
          </View>
          <View style={{position: 'relative'}}>
            <TextInput
              placeholder="Put it in here"
              style={{
                borderWidth: 1,
                borderColor: '#E8E8E8',
                borderRadius: 5,
                height: 40,
                fontSize: 13,
                paddingLeft: 45,
                paddingRight: 20,
                backgroundColor: '#C4DBE0',
                marginRight: 15,
                marginLeft: 12,
              }}
            />
            <Image
              source={require('../../../../assets/icon/loupe.png')}
              style={{position: 'absolute', top: 8, left: 23}}
            />
          </View>
        </View>
        <Tobchat />
      </>
    );
  }
}

export default Message;

const Styles = StyleSheet.create({
  container: {
    
  },
  head: {
    flexDirection: 'row',
    paddingHorizontal: 13,
    paddingTop: 13,
    backgroundColor: 'white',
    paddingBottom: 13,
  },
  Icon: {
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    marginLeft: 23,
  },
});
