import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput,StatusBar } from 'react-native'

export default class index extends Component {
    render() {
        return (
            <>
            <StatusBar translucent backgroundColor='transparent'/>
            <View style={{flex: 1}}>
                <View style={{alignItems: 'center'}}>
                    <Image source={require('../../../assets/icon/gam.jpg')} style={{width: '100%', height: 220}}/>
                </View>
                
                <View style={{flex: 1}}>
                    <View style={{top: -20, borderTopLeftRadius: 20, backgroundColor: 'red', borderTopRightRadius: 20, alignItems: 'center'}}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', }}>Login</Text>
                    </View>
                </View>


                <View>
                    <TextInput placeholder="Email" style={{ }}/>
                </View>
            </View>
            </>
        )
    }
}























{/* const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        alignItems: 'center',
        paddingBottom: 30
    },
    img: {
        width: "100%",
        height: 210,
    },
    loginw: {
        top: -60, 
        backgroundColor: 'white', 
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    login: {
        alignItems: 'center',
        // borderBottomWidth: 1,
        // borderBottomColor: 'grey',
        marginHorizontal: 90
    },
    logint: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    boxinput: {
        backgroundColor: 'yellow',
        marginHorizontal: 20,
        marginVertical: 5,
        borderRadius: 20,
        height: 40,  
    },
    input: {
        padding: 10,
        
    }
}) */}

