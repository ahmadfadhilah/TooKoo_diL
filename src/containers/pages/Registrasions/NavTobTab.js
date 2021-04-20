import React, { Component } from 'react'
import { Text, View, Image, TextInput,StatusBar, TouchableOpacity } from 'react-native'
import TOB from '../../../config/router/Tobtab'

export default class NavTobTab extends Component {
    render() {
        return (
            <>
            <StatusBar translucent backgroundColor='transparent'/>
            <TOB />
            </>
        )
    }
}


