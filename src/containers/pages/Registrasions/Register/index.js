import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Icongoogle from 'react-native-vector-icons/FontAwesome5Pro';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
    };
  }

  gotoLogin() {
    this.props.navigation.goBack();
  }

  Register() {
    const {first_name ,username, email, password, password_confirmation} = this.state;

    //post json
    var dataToSend = {
      first_name: first_name,
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    };

    //making data to send on server
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    //Post request
    fetch('https://tookoodil.herokuapp.com/api/register', {
      method: 'POST',
      body: formBody,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then(response => response.json())

      //if response is in json then in success
      .then(responseJson => {
        console.log(responseJson);
        const {token} = responseJson;
        if (token) {
          this.gotoLogin();
        } else {
          alert('Berhasil');
        }
      })

      //if response is not in json then in error
      .catch(error => {
        alert('diliat form lu cuk');
      });
  }

  render() {
    return (
      <>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View style={{backgroundColor: 'white'}}>
            <View style={{marginHorizontal: 25, marginTop: 6}}>
              <TextInput
                placeholder="name"
                style={{
                  borderWidth: 2,
                  borderColor: '#E8E8E8',
                  borderRadius: 25,
                  height: 38,
                  fontSize: 14,
                  paddingLeft: 40,
                  paddingRight: 20,
                  backgroundColor: 'white',
                  marginBottom: 17,
                }}
                onChangeText={first_name => this.setState({first_name})}
              />
              <TextInput
                placeholder="username"
                style={{
                  borderWidth: 2,
                  borderColor: '#E8E8E8',
                  borderRadius: 25,
                  height: 38,
                  fontSize: 14,
                  paddingLeft: 40,
                  paddingRight: 20,
                  backgroundColor: 'white',
                  marginBottom: 17,
                }}
                onChangeText={username => this.setState({username})}
              />
              <TextInput
                placeholder="email"
                style={{
                  borderWidth: 2,
                  borderColor: '#E8E8E8',
                  borderRadius: 25,
                  height: 38,
                  fontSize: 14,
                  paddingLeft: 40,
                  paddingRight: 20,
                  backgroundColor: 'white',
                  marginBottom: 17,
                }}
                onChangeText={email => this.setState({email})}
              />
              <TextInput
                placeholder="password"
                style={{
                  borderWidth: 2,
                  borderColor: '#E8E8E8',
                  borderRadius: 25,
                  height: 38,
                  fontSize: 14,
                  paddingLeft: 40,
                  paddingRight: 20,
                  backgroundColor: 'white',
                  marginBottom: 17,
                }}
                onChangeText={password => this.setState({password})}
                secureTextEntry={true}
              />
              <TextInput
                placeholder="password_confirmation"
                style={{
                  borderWidth: 2,
                  borderColor: '#E8E8E8',
                  borderRadius: 25,
                  height: 38,
                  fontSize: 14,
                  paddingLeft: 40,
                  paddingRight: 20,
                  backgroundColor: 'white',
                  marginBottom: 17,
                }}
                onChangeText={password_confirmation =>
                  this.setState({password_confirmation})
                }
                secureTextEntry={true}
              />
            </View>
            <View>
              <TouchableOpacity onPress={() => this.Register()}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                    backgroundColor: 'yellow',
                    opacity: 0.8,
                    borderRadius: 15,
                    width: '90%',
                    height: 38,
                    alignSelf: 'center',
                    marginTop: 16,
                    justifyContent: 'center',
                    padding: 5,
                    color: 'black',
                  }}>
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 40,
              }}>
              <Icongoogle
                name="facebook"
                size={16}
                color="blue"
                style={{
                  borderWidth: 2,
                  borderRadius: 50,
                  borderColor: '#E6E6E6',
                  textAlign: 'center',
                  padding: 10,
                  opacity: 0.8,
                  alignSelf: 'center',
                }}
              />
              <Icongoogle
                name="google"
                size={16}
                color="red"
                style={{
                  borderWidth: 2,
                  borderRadius: 50,
                  textAlign: 'center',
                  borderColor: '#E6E6E6',
                  padding: 10,
                  marginHorizontal: 16,
                  opacity: 0.8,
                  alignSelf: 'center',
                }}
              />
              <Icongoogle
                name="twitter"
                size={16}
                color="deepskyblue"
                style={{
                  borderWidth: 2,
                  borderRadius: 50,
                  borderColor: '#E6E6E6',
                  textAlign: 'center',
                  padding: 10,
                  opacity: 0.8,
                  alignSelf: 'center',
                }}
              />
            </View>
          </View>
        </View>
      </>
    );
  }
}
