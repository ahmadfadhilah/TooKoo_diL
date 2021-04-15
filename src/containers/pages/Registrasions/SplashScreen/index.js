import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

export default class SplashScreen extends Component {

    componentDidMount() {
        AsyncStorage.getItem('token')
        .then(token => console.log('Masuk bos token nya'))
    }

    render() {

        setTimeout(() => {
            this.props.navigation.replace('Home')
        }, 3000);

        const gradienHeight = 500;
        const gradienBackground = '#F9D423';
        const data = Array .from({ length: gradienHeight });
        return (
            <View style={styles.container}>
                {data.map((_, i) => (
                    <View 
                        key={i}
                        style={{
                            position: 'absolute',
                            backgroundColor: gradienBackground,
                            height: 1,
                            bottom: (gradienHeight - i),
                            right: 0,
                            left: 0,
                            zIndex: 2,
                            opacity: (1 / gradienHeight) *(i + 1)
                        }}/>
                ))}
                <View style={styles.head}>
                    <Text style={styles.text}> TooKoo-diL </Text>
                </View>
                <ActivityIndicator size='large' color='red'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    head: {
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        
    }
})
