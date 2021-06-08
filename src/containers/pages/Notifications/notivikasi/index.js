import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

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
                <View>
                <View style={{flexDirection: 'row', marginBottom: 16, paddingTop: 18, marginHorizontal: 14}}>
                  <View>
                    <Image source={require('../../../../assets/icon/44.jpeg')} style={{width: 100, height: 100, borderRadius: 3}}/>
                  </View>
                  <View style={{marginLeft: 16, flex: 1}}>
                    <Text style={{fontSize: 14, color: '#2E2E2E', fontWeight: '600', marginBottom: 4}}>Custom Men's Shoe</Text>
                    <Text style={{fontSize: 18, color: '#2E2E2E', fontWeight: 'bold', marginBottom: 26}}>Nike Air Max 90 By You</Text>
                    <Text style={{fontSize: 18, width: '80%', color: '#1C1C1C', backgroundColor: '#EFEBE0'}}>Rp 2,099,000</Text>
                  </View>
                </View>
                <View style={{height: 10, backgroundColor: '#DBE8D8'}}></View>
                <View style={{flexDirection: 'row', marginBottom: 16, paddingTop: 18, marginHorizontal: 14}}>
                  <View>
                    <Image source={require('../../../../assets/icon/45.png')} style={{width: 100, height: 100, borderRadius: 3}}/>
                  </View>
                  <View style={{marginLeft: 16, flex: 1}}>
                    <Text style={{fontSize: 14, color: '#2E2E2E', fontWeight: '600', marginBottom: 4}}>Custom Men's Shoe</Text>
                    <Text style={{fontSize: 18, color: '#2E2E2E', fontWeight: 'bold', marginBottom: 26}}>Air Jordan 11 PS</Text>
                    <Text style={{fontSize: 18, width: '80%', color: '#1C1C1C', backgroundColor: '#EFEBE0'}}>Rp 2,899,000</Text>
                  </View>
                </View>
                </View>
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