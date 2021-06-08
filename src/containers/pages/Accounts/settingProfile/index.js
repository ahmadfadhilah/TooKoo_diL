import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import User from 'react-native-vector-icons/FontAwesome';
import Phone from 'react-native-vector-icons/Feather';
import Email from 'react-native-vector-icons/Fontisto';

export default class SettingProfile extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      nohape: '',
      gender: '',
      born_date: '',
    };
  }

  gotoAccount() {
    this.props.navigation.goBack();
  }

  EditProfile = () => {
    const {first_name, last_name, nohape, gender, born_date} = this.state;
    const url = 'https://tookoodil.herokuapp.com/api/profile/%7Bid%7D';
    const data = {
      first_name: first_name,
      last_name: last_name,
      nohape: nohape,
      gender: gender,
      born_date: born_date,
      _method: 'PUT',
    };
    this.setState({loading: true, loading: false});
    alert('Berhasil dirubah')
  };

  render() {
    return (
      <View style={Styles.container}>
        {/* head */}
        <View style={Styles.header}>
          <TouchableOpacity
            style={Styles.icons}
            onPress={() => this.gotoAccount()}>
            <Icon name="arrow-back-ios" size={23} style={Styles.icon} />
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
            <User
              name="user-o"
              size={23}
              style={{paddingLeft: 4, paddingTop: 12, paddingRight: 8}}
            />
            <TextInput
              style={Styles.Input}
              placeholder="First name"
              onChangeText={text => this.setState({first_name: text})}
            />
          </View>
        </View>
        <View style={Styles.HalInput}>
          <View style={Styles.TextInput}>
            <User
              name="user-o"
              size={23}
              style={{paddingLeft: 4, paddingTop: 12, paddingRight: 8}}
            />
            <TextInput
              style={Styles.Input}
              placeholder="Last name"
              onChangeText={text => this.setState({last_name: text})}
            />
          </View>
        </View>
        <View style={Styles.HalInput}>
          <View style={Styles.TextInput}>
            <Phone
              name="phone"
              size={23}
              style={{paddingLeft: 4, paddingTop: 12, paddingRight: 7}}
            />
            <TextInput
              style={Styles.Input}
              placeholder="Phone"
              onChangeText={(text) => this.setState({phone: text})}
            />
          </View>
        </View>
        <View style={Styles.HalInput}>
          <View style={Styles.TextInput}>
            <User
              name="genderless"
              size={23}
              style={{paddingLeft: 4, paddingTop: 12, paddingRight: 13}}
            />
            <TextInput
              style={Styles.Input}
              placeholder="Gender"
              onChangeText={(text) => this.setState({gender: text})}
            />
          </View>
        </View>
        <View style={Styles.HalInput}>
          <View style={Styles.TextInput}>
            <Email
              name="date"
              size={23}
              style={{paddingLeft: 4, paddingTop: 12, paddingRight: 7}}
            />
            <TextInput
              style={Styles.Input}
              placeholder="Born & date"
              onChangeText={text => this.setState({born_date: text})}
            />
          </View>
        </View>
        {/* selesai */}
        <View style={Styles.submit}>
          <TouchableOpacity
          onPress={() =>this.EditProfile()}>
          {this.state.loading ? (
            <ActivityIndicator size={'large'} color="skyblue" />
          ) : (
            <Text style={Styles.submittext}>Submit</Text>
          )}      
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
    flexDirection: 'row',
  },
  submit: {
    marginHorizontal: 16,
    backgroundColor: 'red',
    borderRadius: 9,
    marginTop: 25,
  },
  submittext: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '900',
    margin: 7,
    color: 'white',
  },
});
