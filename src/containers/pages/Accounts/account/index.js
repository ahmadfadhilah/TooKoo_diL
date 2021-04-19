import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Simple from 'react-native-vector-icons/SimpleLineIcons'
import Help from 'react-native-vector-icons/Ionicons'
import Clock from 'react-native-vector-icons/AntDesign'

export default class Account extends Component {

    gotoSetting() {
        this.props.navigation.navigate('SettingAccount')
    }

    gotoProfile() {
        this.props.navigation.navigate('SettingProfile')
    }

    gotoHome() {
        this.props.navigation.navigate('Home')
    }

    gotoLogin() {
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <View style={styles.container}>
                {/* profile atas  */}
                <View style={{backgroundColor: '#ffff3d'}}>
                    <View style={styles.Icon}>
                        <TouchableOpacity onPress={() => this.gotoHome()}>
                        <Icon name='arrow-back-ios' size={25}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.gotoSetting()}>
                        <Icon name='settings' size={25}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.user}>
                        <TouchableOpacity onPress={() => this.gotoProfile()}>
                        <Image source={require('../../../../assets/icon/profile.png')} style={styles.userImg}/>
                        </TouchableOpacity>
                        <Text style={styles.userText}>StevenAsep</Text>
                        <Text style={styles.userText1}>StevenAsep000@gmail.com</Text>
                    </View>
                </View>
                {/* bar section */}
                <View style={{height: 12, backgroundColor: '#F2F2F2'}}></View>
                <View style={styles.name}>
                    <TouchableOpacity style={styles.namehal}>
                    <Clock name="hearto" size={22} style={{paddingLeft: 5}}/>
                    <Text style={styles.text}>Favorit saya</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.name}>
                    <TouchableOpacity style={styles.namehal}>
                    <Help name="clipboard-outline" size={22} style={{paddingLeft: 5}}/>
                    <Text style={styles.text}>Pesanan saya</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.name}>
                    <TouchableOpacity style={styles.namehal}>
                    <Clock name="staro" size={22} style={{paddingLeft: 5}}/>
                    <Text style={styles.text}>Beri Penilaian</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.name}>
                    <TouchableOpacity style={styles.namehal}>
                    <Clock name="message1" size={22} style={{paddingLeft: 5}}/>
                    <Text style={styles.text}>Ulasan saya</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.name}>
                    <TouchableOpacity style={styles.namehal1}>
                    <Clock name="clockcircleo" size={21} style={{paddingLeft: 5}}/>
                    <Text style={styles.text}>Terakhir dilihat</Text>
                    </TouchableOpacity>
                </View>
                {/* Help */}
                <View style={{height: 12, backgroundColor: '#F2F2F2'}}></View>
                <View style={styles.name}>
                    <TouchableOpacity style={styles.namehal} onPress={() => this.gotoSetting()}>
                    <Simple name="user" size={20} style={{paddingLeft: 5}}/>
                    <Text style={styles.text}>Pengaturan Account</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.name}>
                    <TouchableOpacity style={styles.namehal}>
                    <Help name="help-outline" size={22} style={{paddingLeft: 5}}/>
                    <Text style={styles.text}>Pusat Bantuan</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.name}>
                    <TouchableOpacity style={styles.namehal1} onPress={() => this.gotoLogin()}>
                    <Simple name="logout" size={20} style={{paddingLeft: 5}}/>
                    <Text style={styles.text}>Log out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

// styles

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    Icon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginTop: 12,
    },
    user: {
        alignItems: 'center',
        marginBottom: 14,
        marginTop: -18
    },
    userImg: {
        width: 130,
        height: 130,
        marginTop: 40,
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
    },
    name: {
        marginTop: 14,
    },
    namehal: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
        flexDirection: 'row',
    },
    namehal1: {
        flexDirection: 'row',
        marginLeft: 20
    },
    text: {
        marginLeft: 14,
        marginBottom: 12
    }
})