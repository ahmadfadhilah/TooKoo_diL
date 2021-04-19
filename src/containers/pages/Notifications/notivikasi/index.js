import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default class Notivikasi extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.head}>
                    <View style={Styles.textB}>
                        <Text style={Styles.text}>Notivikasi</Text>
                    </View>
                    <View style={Styles.imgB}>
                        <Image source={require('../../../../assets/icon/wwww.png')} style={Styles.img}/>
                        <Image source={require('../../../../assets/icon/chat.png')} style={Styles.img1}/>
                    </View>
                </View>
                <View style={{height: 10, backgroundColor: '#DBE8D8'}}></View>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    head: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingTop: 18,
        justifyContent: 'space-between',
        paddingBottom: 11,
        backgroundColor: '#FEDE00'
    },
    textB: {
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
    },
    imgB: {
        flexDirection: 'row'
    },
    img: {
        right: 12
    }


})