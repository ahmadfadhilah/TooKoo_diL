import React, { Component } from 'react'
import { Text, View, Image, TextInput,StatusBar, TouchableOpacity } from 'react-native'
import Top from '../../../config/router'

export default class NavTobTab extends Component {
    render() {
        return (
            <>
            <StatusBar translucent backgroundColor='transparent'/>
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <View style={{alignItems: 'center'}}>
                    <Image source={require('../../../assets/icon/gam.jpg')} style={{width: '100%', height: 210}}/>
                </View>

                <View style={{backgroundColor: 'white'}}>
                    <View style={{top: -20, borderTopLeftRadius: 35, borderTopRightRadius: 35, alignItems: 'center', backgroundColor: 'white', height: 20}}></View>
                </View>
                <Top />
            </View>
            </>
        )
    }
}


