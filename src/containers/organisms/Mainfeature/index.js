import React, { Component } from 'react'
import { View } from 'react-native'
import MainFeatureIcon from '../../../components/molecules/mainfeature'

export class MainFaeture extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 18, }}>
              <View style={{flexDirection: 'row',  justifyContent: 'space-between', width: '100%', flexWrap: 'wrap'}}>
                <MainFeatureIcon title="Elektronik" img={require('../../../assets/icon/electronics.png')}/>
                <MainFeatureIcon title="Fashion" img={require('../../../assets/icon/dress.png')}/>
                <MainFeatureIcon title="Kesehatan" img={require('../../../assets/icon/healthcare.png')}/>
                <MainFeatureIcon title="Sports" img={require('../../../assets/icon/sports.png')}/>
                <MainFeatureIcon title="Atk" img={require('../../../assets/icon/sticky-note.png')}/>
                <MainFeatureIcon title="Otomotif" img={require('../../../assets/icon/mechanic-tools.png')}/>
                <MainFeatureIcon title="Foods" img={require('../../../assets/icon/snacks.png')}/>
                <MainFeatureIcon title="Lainnya" img={require('../../../assets/icon/bbb.png')}/>
              </View>
            </View>
        )
    }
}

export default MainFaeture
