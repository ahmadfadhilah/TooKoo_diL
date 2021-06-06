import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class SettingAccount extends Component {

    gotoNotAccount() {
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View style={styles.container}>
                {/* head */}
                <View style={styles.head}>
                    <TouchableOpacity onPress={() => this.gotoNotAccount()}>
                    <Icon name="arrow-back" size={26} color="orange" style={styles.img} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Pengaturan Akun</Text>
                </View>
                <View style={{borderBottomWidth: 1, opacity: 0.1}}></View>
                {/* border */}
                <ScrollView>
                <View style={styles.border}>
                    <Text style={styles.textborder}>Akun saya</Text>
                </View>
                {/* fiture */}
                <View style={styles.name}>
                    <TouchableOpacity style={styles.namehal}>
                    <Text style={styles.nameText}>Profil Saya</Text>
                    <Icon name="keyboard-arrow-right" size={25} style={{bottom: 2, paddingRight: 12}}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.name}>
                    <TouchableOpacity style={styles.namehal}>
                    <Text style={styles.nameText}>Alamat Saya</Text>
                    <Icon name="keyboard-arrow-right" size={25} style={{bottom: 2, paddingRight: 12}}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.name}>
                    <TouchableOpacity style={styles.namehal1}>
                    <Text style={styles.nameText}>Kartu Rekening Saya</Text>
                    <Icon name="keyboard-arrow-right" size={25} style={{bottom: 2, paddingRight: 12}}/>
                    </TouchableOpacity>
                </View>
                {/* border */}
                <View style={styles.border}>
                    <Text style={styles.textborder}>Pengaturan</Text>
                </View>
                {/* fiture */}
                <View style={styles.name}>
                    <TouchableOpacity style={styles.namehal}>
                    <Text style={styles.nameText}>Profil Saya</Text>
                    <Icon name="keyboard-arrow-right" size={25} style={{bottom: 2, paddingRight: 12}}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.name}>
                    <TouchableOpacity style={styles.namehal}>
                    <Text style={styles.nameText}>Alamat Saya</Text>
                    <Icon name="keyboard-arrow-right" size={25} style={{bottom: 2, paddingRight: 12}}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.name}>
                    <TouchableOpacity style={styles.namehal1}>
                    <Text style={styles.nameText}>Kartu Rekening Saya</Text>
                    <Icon name="keyboard-arrow-right" size={25} style={{bottom: 2, paddingRight: 12}}/>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    head: {
        flexDirection: 'row',
        padding: 14,
        opacity: 0.7
    },
    text: {
        fontSize: 19,
        paddingLeft: 10
    },
    img: {
        paddingTop: 1,
        paddingRight: 12
    },
    border: {
        height: 35,
        backgroundColor: 'silver',
        paddingTop: 13,
        paddingLeft: 12,
        opacity: 0.4
    },
    textborder: {
        fontSize: 12
    },
    name: {
        marginTop: 14,
    },
    namehal: {
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#bfc1c2',
    },
    namehal1: {
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nameText: {
        fontSize: 15,
        marginLeft: 14,
        marginBottom: 12,
    }
})