import React, { Component } from 'react'
import { StatusBar, Text, Image, View } from 'react-native'
import TOB from '../../../config/router/Tobtab'

export default class NavTobTab extends Component {
    render() {
        return (
            <>
            <StatusBar translucent backgroundColor='transparent'/>
            <View style={{alignItems: 'center'}}>
                <Image source={require('../../../assets/icon/gam.jpg')} style={{width: '100%', height: 200}}/>
            </View>
            <View style={{backgroundColor: 'white', top: -20, borderTopLeftRadius: 35, borderTopRightRadius: 35, height: 20}}></View>
            <TOB />
            </>
        )
    }
}


