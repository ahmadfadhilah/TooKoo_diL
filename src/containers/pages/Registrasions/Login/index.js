import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react'
import { Text, View, Image, TextInput,StatusBar, TouchableOpacity } from 'react-native'
import Icongoogle from 'react-native-vector-icons/FontAwesome5Pro'

export default class Login extends Component {
    constructor() {
        super()
        this.state={
            email: '',
            password: ''
        }
    }

    gotoForgotPw() {
        this.props.navigation.navigate('ForgotPw')
    }

    gotoHome() {
        this.props.navigation.navigate('Home')
    }

    gotoRegister() {
        this.props.navigation.navigate('Register')
    }

    Login = () => {
        const { email, password } = this.state

        // POST json
        var dataToSend = {email: email, password: password};
        // making data to send on server
        var formBody = [];
        for (var key in dataToSend) {
            var encodedKey = encodeURIComponent(key);
            var encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&")
        // POST request
        fetch('https://tookoodil.herokuapp.com/api/login ', {
            method: "POST",//request Type
            body: formBody,//post body
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        })
        .then((response) => response.json())
        //if response is in json then in success
        .then((responseJson) => {
            console.log(responseJson)
            const {token, error} = responseJson
            if(token){
                AsyncStorage.setItem('token', token). then(() => {
                    this.gotoHome()
                    alert('sukses cuy')
                })
            }else {
                alert('error cuy')
            }
        })
        //if response is not in json then in eror
        .catch((error) => {
            alert('error lagi cuy')
        })
    }

    render() {
        return (
            <>
            <StatusBar translucent backgroundColor='transparent'/>
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <View style={{alignItems: 'center'}}>
                    <Image source={require('../../../../assets/icon/gam.jpg')} style={{width: '100%', height: 210}}/>
                </View>

                <View style={{backgroundColor: 'white'}}>
                    <View style={{top: -20, borderTopLeftRadius: 35, borderTopRightRadius: 35, alignItems: 'center', backgroundColor: 'white', height: 20}}></View>
                        <Text style={{fontSize: 18, fontWeight: 'bold', alignSelf: 'center', top: -37, borderBottomWidth: 1.7, borderBottomColor: '#FFFF00', paddingBottom: 5, paddingHorizontal: 35}}>Sign In</Text>
                    <View style={{marginHorizontal: 25, marginTop: 80,}}> 
                        <TextInput 
                        placeholder="Email" 
                        style={{borderWidth: 2, borderColor: '#E8E8E8', borderRadius: 25, height: 38, fontSize: 14, paddingLeft: 40, paddingRight: 20, backgroundColor: 'white', marginBottom: 15}}
                        onChangeText={email => this.setState({email})}
                        />
                        <TextInput 
                        placeholder="Password" 
                        style={{borderWidth: 2, borderColor: '#E8E8E8', borderRadius: 25, height: 38, fontSize: 14, paddingLeft: 40, paddingRight: 20, backgroundColor: 'white', }}
                        onChangeText={password => this.setState({password})}
                        secureTextEntry={true}
                        />
                        <TouchableOpacity onPress={() => this.gotoForgotPw()}>
                        <Text style={{fontSize: 12, textAlign: 'right', marginTop: 9, color: 'grey'}}>Forget Password</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => this.Login()}>
                            <Text style={{textAlign: 'center',fontSize: 20, fontWeight: 'bold',backgroundColor: '#FEDE00',opacity: 0.8,borderRadius: 15,width: '90%', height: 38,alignSelf: 'center',marginTop: 60, justifyContent: 'center', padding: 5}}>Sign In</Text>
                        </TouchableOpacity>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 137}}>
                            <Text style={{fontSize: 12, marginTop: 8}}>New User /</Text>
                            <TouchableOpacity onPress={() => this.gotoRegister()}>
                            <Text style={{fontSize: 12, marginTop: 8}}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20,}}>
                        <Icongoogle name='facebook' size={16} color="blue" style={{borderWidth: 2, borderRadius: 50, borderColor: '#E6E6E6',  textAlign: 'center', padding: 10, opacity: 0.8, alignSelf: 'center'}}/>
                        <Icongoogle name='google' size={16} color="red" style={{borderWidth: 2, borderRadius: 50, textAlign: 'center',  borderColor: '#E6E6E6', padding: 10, marginHorizontal: 16, opacity: 0.8, alignSelf: 'center'}}/>
                        <Icongoogle name='twitter' size={16} color="deepskyblue" style={{borderWidth: 2, borderRadius: 50, borderColor: '#E6E6E6',  textAlign: 'center', padding: 10, opacity: 0.8, alignSelf: 'center'}}/>
                    </View>
                </View>
            </View>
            </>
        )
    }
}



