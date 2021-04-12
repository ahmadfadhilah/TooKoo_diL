import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'


export default class Account extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.Icon}>
                    <Icon name='arrow-back-ios' size={25}/>
                    <Icon name='settings' size={25}/>
                </View>
                <View style={styles.user}>
                    <Image source={require('../../../assets/icon/profile.png')} style={styles.userImg}/>
                    <Text style={styles.userText}>StevenAsep</Text>
                    <Text style={styles.userText1}>StevenAsep000@gmail.com</Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text>apa weh</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 12
    },
    Icon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16
    },
    user: {
        alignItems: 'center',

    },
    userImg: {
        width: 130,
        height: 130,
        marginTop: 60,
    },
    userText: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 15
    },
    userText1: {
        fontSize: 12,
        color: 'grey',
        paddingTop: 3
    }
})