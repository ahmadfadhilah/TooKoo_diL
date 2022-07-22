import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Account from './account'
import NotAccount from './NotAccount'
import AsyncStorage from '@react-native-community/async-storage'

export default class Pembeda extends Component {
    constructor() {
        super()
        this.state={
            token: '',
        }
    }
    
    componentDidMount() {
        AsyncStorage.getItem('token')
        .then((token) => {
            if (token!=null) {
                this.setState({ token: token })
            } else {
                console.log('Tidak ada cuy tokennya')
            }
        })
    }

    
    
    render() {
        return (
            <>
               {this.token!=null ? (
                   <NotAccount {...this.props}/>
               ):(
                   <Account {...this.props}/>
               )}
            </>
        )
    }
}