import React, { Component } from 'react'
import { View } from 'react-native'
import MainFeatureIcon from '../../../components/molecules/mainfeature'

export class MainFaeture extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 18, }}>
              <View style={{flexDirection: 'row',  justifyContent: 'space-between', width: '100%', flexWrap: 'wrap'}}>
                <MainFeatureIcon title="Elektronik" img={require('../../../assets/icon/delivery-bike.png')}/>
                <MainFeatureIcon title="Fashion" img={require('../../../assets/icon/delivery-truck.png')}/>
                <MainFeatureIcon title="Kesehatan" img={require('../../../assets/icon/dish.png')}/>
                <MainFeatureIcon title="Sports" img={require('../../../assets/icon/hamburger.png')}/>
                <MainFeatureIcon title="Atk" img={require('../../../assets/icon/calendar.png')}/>
                <MainFeatureIcon title="Otomotif" img={require('../../../assets/icon/mobility.png')}/>
                <MainFeatureIcon title="Foods" img={require('../../../assets/icon/motorbike.png')}/>
                <MainFeatureIcon title="Lainnya" img={require('../../../assets/icon/cringgede.png')}/>
              </View>
            </View>
        )
    }
}

export default MainFaeture
