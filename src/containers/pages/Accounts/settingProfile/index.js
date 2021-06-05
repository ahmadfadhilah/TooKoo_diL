import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import User from 'react-native-vector-icons/FontAwesome';
import Phone from 'react-native-vector-icons/Feather'
import Email from 'react-native-vector-icons/Fontisto'

export default class SettingProfile extends Component {
  gotoAccount() {
    this.props.navigation.navigate('Account')
  }

  render() {
    return (
      <View style={Styles.container}>
        {/* head */}
        <View style={Styles.header}>
          <TouchableOpacity style={Styles.icons} onPress={() => this.gotoAccount()}>
            <Icon name="arrow-back-ios" size={23} style={Styles.icon}/>
            <Text style={Styles.texticon}>Back</Text>
          </TouchableOpacity>
          <View style={Styles.texts}>
            <Text style={Styles.text}>Edit Profile</Text>
          </View>
        </View>
        {/* body */}
        <View style={Styles.images}>
          <Image
            source={require('../../../../assets/icon/127.png')}
            style={Styles.image}
          />
          <Text style={Styles.imagetext}>Joe nadi</Text>
        </View>
        {/* Body 1 */}
        <View style={Styles.HalInput}>
          <View style={Styles.TextInput}>
            <User name='user-o' size={23} style={{paddingLeft: 4, paddingTop: 12, paddingRight: 8}}/>
            <TextInput style={Styles.Input} placeholder="First name"/>
          </View>
        </View>
        <View style={Styles.HalInput}>
          <View style={Styles.TextInput}>
            <User name='user-o' size={23} style={{paddingLeft: 4, paddingTop: 12, paddingRight: 8}}/>
            <TextInput style={Styles.Input} placeholder="Last name"/>
          </View>
        </View>
        <View style={Styles.HalInput}>
          <View style={Styles.TextInput}>
            <Phone name='phone' size={23} style={{paddingLeft: 4, paddingTop: 12, paddingRight: 7}}/>
            <TextInput style={Styles.Input} placeholder="Phone"/>
          </View>
        </View>
        <View style={Styles.HalInput}>
          <View style={Styles.TextInput}>
            <Email name='email' size={23} style={{paddingLeft: 4, paddingTop: 12, paddingRight: 7}}/>
            <TextInput style={Styles.Input} placeholder="Email"/>
          </View>
        </View>
        <View style={Styles.HalInput}>
          <View style={Styles.TextInput}>
            <User name='genderless' size={23} style={{paddingLeft: 4, paddingTop: 12, paddingRight: 13}}/>
            <TextInput style={Styles.Input} placeholder="Gender"/>
          </View>
        </View>
        <View style={Styles.HalInput}>
          <View style={Styles.TextInput}>
            <Email name='date' size={23} style={{paddingLeft: 4, paddingTop: 12, paddingRight: 7}}/>
            <TextInput style={Styles.Input} placeholder="Born & date"/>
          </View>
        </View>
        {/* selesai */}
        <View style={Styles.submit}>
          <TouchableOpacity>
            <Text style={Styles.submittext}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    marginHorizontal: 16,
    flexDirection: 'row',
    marginTop: 12,
  },
  texts: {
    marginLeft: 63,
  },
  text: {
    fontSize: 17,
  },
  icons: {
    marginTop: 7,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  texticon: {
    fontSize: 17,
    right: 7,
  },
  images: {
    alignItems: 'center',
    marginTop: 18,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 4,
  },
  imagetext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey',
    top: 4,
  },
  HalInput: {
    marginTop: 1,
  },
  TextInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginHorizontal: 16,
    flexDirection: 'row'
  },
  submit: {
    marginHorizontal: 16,
    backgroundColor: 'red',
    borderRadius: 9,
    marginTop: 25
  },
  submittext: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '900',
    margin: 7,
    color: 'white'
  }
});
