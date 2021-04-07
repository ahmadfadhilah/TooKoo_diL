import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'

import BenerBar from '../../../components/molecules/Bannerfeature'
import NewsBar from '../../../components/molecules/Infofeature'
import NewsSection from '../../../components/molecules/NewsFeature'
import SeacrhBar from '../../../components/molecules/searchfeature'
import BodyBar from '../../../containers/organisms/BodyBar'
import ScrolProduct from '../../../containers/organisms/HorizontalProduct'
import MainFaeture from '../../../containers/organisms/Mainfeature'
import NavBar from '../../../containers/organisms/NavBar'
import BoxProduct from '../../../components/molecules/BoxProduct'


export class Home extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
              <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
                <SeacrhBar />
                <BodyBar />
                <MainFaeture />
                <View style={{height: 17, backgroundColor: '#F2F2F2'}}></View>
                <NewsSection onPress={() => this.props.navigation.navigate('NewsDetail')}/>
                <NewsBar />
                <BenerBar />
                <ScrolProduct />
                <BoxProduct />
              </ScrollView> 
                <NavBar />
            </View>
        )
    }
}

export default Home
